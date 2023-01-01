const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const e = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "connections_app",
});

app.post("/create", (req, res) => {
  const profilePicture = req.body.profilePicture;
  const fullName = req.body.fullName;
  const position = req.body.position;
  const lastContacted = req.body.lastContacted;
  const contactMethod = req.body.contactMethod;
  const description = req.body.description;
  db.query(
    "INSERT INTO connections (profilePicture, fullName, position, lastContacted, contactMethod, description) VALUES (?,?,?,?,?,?)",
    [
      profilePicture,
      fullName,
      position,
      lastContacted,
      contactMethod,
      description,
    ],
    (err, result) => {
      if (err) {
        console.log(`Add Connection: Failure with MySQL: ${err}`);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/connections", (req, res) => {
  const idConnections = req.query.idConnections;
  const idConnectionGroups = req.query.idConnectionGroups

  var queryStatement = "SELECT * FROM connections"
  var queryParams = []

  if (idConnections != -1) {
    queryStatement += " WHERE idconnections = ?"
    queryParams.push(idConnections)
  }
  if (idConnectionGroups != -1) {
    idConnections != -1 ? queryStatement += " AND idconnectionGroups = ?" : queryStatement += " WHERE idconnectionGroups = ?"
    queryParams.push(idConnectionGroups)
  }

  db.query(queryStatement, queryParams, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/connectionGroups", (req, res) => {
  const idConnectionGroups = req.query.idConnectionGroups

  var queryStatement = "SELECT * FROM connectiongroups"
  var queryParams = []

  if (idConnectionGroups != -1) {
    queryStatement += " WHERE idconnectionGroups = ?"
    queryParams.push(idConnectionGroups)
  }
  db.query(queryStatement, queryParams, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(5000, () => {
  console.log("Yey, your server is running on port 5000");
});
