const express = require("express"); // express 웹서버 관련 모듈 불러오기
const history = require("connect-history-api-fallback");
const session = require("express-session"); // express-session 로그인 관련 모듈 불러오기
const fs = require("fs"); // filesystem으로 디렉토리에 접근할 수 있게 해주는 모듈 불러오기
const http = require("http"); // http 모듈 불러오기

const app = express(); // express() 함수 호출
const port = process.env.PORT || 3000; // 환경 변수 PORT에 있는 것이 무엇이든, 또는 거기에 아무것도 없으면 3000.

let sql = require("./sql.js"); //sql문서 로드하기

// 데이터베이스 연동 정보
/* const db = {
  database: "project01",
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "1234",
};
 */

const db = {
  database: "project01",
  connectionLimit: 10,
  host: "svc.sel4.cloudtype.app", // 원격 호스트 주소로 변경
  user: "root",
  password: "1234",
  port: 30917, // 포트 번호 추가
};

// Connection Pool 생성
const dbPool = require("mysql").createPool(db);

app.use(
  session({
    secret: "secret code",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, //쿠기 유효시간 1시간
    },
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);

// 서버 시작
const server = app.listen(port, () => {
  console.log(`Server started. port ${port}.`);
});

// SQL 파일 변경 감지
fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 변경시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

// 제품 정보 업데이트 엔드포인트 추가
app.post("/api/updateProduct", async (req, res) => {
  const productDetail = req.body;

  // 요청 본문을 출력하여 디버깅
  console.log("Received product detail:", productDetail);

  const query = `
      UPDATE t_product
      SET 
          product_name = ?,
          product_price = ?,
          delivery_price = ?,
          add_delivery_price = ?,
          tags = ?,
          outbound_days = ?,
          category_id = ?
      WHERE 
          id = ?;
  `;
  const params = [
    productDetail.product_name,
    productDetail.product_price,
    productDetail.delivery_price,
    productDetail.add_delivery_price,
    productDetail.tags,
    productDetail.outbound_days,
    productDetail.category_id,
    productDetail.id,
  ];

  console.log("Executing query:", query);
  console.log("With parameters:", params);

  try {
    await dbPool.query(query, params); // db 대신 dbPool 사용
    res.status(200).send("Update successful");
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Error updating product");
  }
});

// 기타 API 엔드포인트
app.post("/api/kakaoLogin", async (request, res) => {
  try {
    await req.db("signUp", request.body.param);
    if (request.body.param.length > 0) {
      for (let key in request.body.param[0])
        request.session[key] = request.body.param[0][key];
      res.send(request.body.param[0]);
    } else {
      res.send({
        error: "Please try again or contact system manager .",
      });
    }
  } catch (err) {
    res.send({
      error: "DB access error",
    });
  }
});

app.post("/api/logout", async (request, res) => {
  request.session.destroy();
  res.send("ok");
});

app.post("/upload/:productId/:type/:fileName", async (request, res) => {
  let { productId, type, fileName } = request.params;
  const dir = `${__dirname}/uploads/${productId}`;
  const file = `${dir}/${fileName}`;
  if (!request.body.data)
    return fs.unlink(file, async (err) =>
      res.send({
        err,
      })
    );
  const data = request.body.data.slice(
    request.body.data.indexOf(";base64,") + 8
  );
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.writeFile(file, data, "base64", async (error) => {
    await req.db("productImageInsert", [
      {
        product_id: productId,
        type: type,
        path: fileName,
      },
    ]);

    if (error) {
      res.send({
        error,
      });
    } else {
      res.send("ok");
    }
  });
});

app.get("/download/:productId/:fileName", (request, res) => {
  const { productId, type, fileName } = request.params;
  const filepath = `${__dirname}/uploads/${productId}/${fileName}`;
  res.header(
    "Content-Type",
    `image/${fileName.substring(fileName.lastIndexOf("."))}`
  );
  if (!fs.existsSync(filepath))
    res.status(404).send({
      error: "Can not found file.",
    });
  else fs.createReadStream(filepath).pipe(res);
});

app.post("/apirole/:alias", async (request, res) => {
  if (!request.session.email) {
    return res.status(401).send({
      error: "You need to login.",
    });
  }

  try {
    res.send(await req.db(request.params.alias));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

app.post("/api/:alias", async (request, res) => {
  try {
    res.send(
      await req.db(request.params.alias, request.body.param, request.body.where)
    );
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const req = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};

app.use(history());
app.use(express.static(__dirname + "/dist"));
