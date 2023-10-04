const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "mydb",
};

const mysql = require("mysql");

const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  const name = "nome";

  connection.query(`INSERT INTO people (nome) VALUES ('${name}')`);

  connection.query(`SELECT nome FROM people`, (error, results) => {
    if (!results?.length || error) return res.send("Falha na conexão");

    return res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>${results.map((el, i) => `<li>${el.nome} ${i}</li>`).join("")}</ol>
      `);
  });
});

app.listen(port, () => {
  console.log("Up on:", port);
});
