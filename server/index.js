const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");

// Load environment variables from the .env file
require("dotenv").config({ path: __dirname + "/../.env" });

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "34.170.134.159",
  password: "12345678",
  database: "main",
  ssl: {
    // SSL/TLS certificate configuration
    ca: fs.readFileSync(process.env.SSL_CA), // CA certificate
    key: fs.readFileSync(process.env.SSL_KEY), // Client key
    cert: fs.readFileSync(process.env.SSL_CERT), // Client certificate
  },
});

app.get("/", (req, res) => {
  res.send("Welcome to James' API");
});

app.get("/allConnections", (req, res) => {
  db.query("SELECT * FROM connections", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const profilePicture = req.body.profilePicture;
  const fullName = req.body.fullName;
  const position = req.body.position;
  const lastContacted = req.body.lastContacted;
  const contactMethod = req.body.contactMethod;
  const description = req.body.description;
  const idconnectionGroups = req.body.idconnectionGroups;
  db.query(
    "INSERT INTO connections (profilePicture, fullName, position, lastContacted, contactMethod, description, idconnectionGroups) VALUES (?,?,?,?,?,?,?)",
    [
      profilePicture,
      fullName,
      position,
      lastContacted,
      contactMethod,
      description,
      idconnectionGroups,
    ],
    (err, result) => {
      if (err) {
        console.log(`Add Connection: Failure with MySQL: ${err}`);
      } else {
        // res.send("Values Inserted");
        res.send(result);
      }
    }
  );
});

app.patch("/connections/:idconnections", (req, res) => {
  const idconnections = req.params.idconnections;
  const profilePicture = req.body.profilePicture;
  const fullName = req.body.fullName;
  const position = req.body.position;
  const lastContacted = req.body.lastContacted;
  const contactMethod = req.body.contactMethod;
  const description = req.body.description;
  const idconnectionGroups = req.body.idconnectionGroups;
  db.query(
    "UPDATE connections SET profilePicture = ?, fullName = ?, position = ?, lastContacted = ?, contactMethod = ?, description = ?, idconnectionGroups = ? WHERE idconnections = ?",
    [
      profilePicture,
      fullName,
      position,
      lastContacted,
      contactMethod,
      description,
      idconnectionGroups,
      idconnections,
    ],
    (err, result) => {
      if (err) {
        console.log(`Update Connection: Failure with MySQL: ${err}`);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete", (req, res) => {
  const idconnections = req.params.idconnections;
  db.query(
    "DELETE FROM connections WHERE idconnections = ?",
    [idconnections],
    (err, result) => {
      if (err) {
        console.log(`Delete Connection: Failure with MySQL: ${err}`);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/connections", (req, res) => {
  const idConnections = req.query.idConnections;
  const idConnectionGroups = req.query.idConnectionGroups;

  var queryStatement = "SELECT * FROM connections";
  var queryParams = [];

  if (idConnections != -1) {
    queryStatement += " WHERE idconnections = ?";
    queryParams.push(idConnections);
  }
  if (idConnectionGroups != -1) {
    idConnections != -1
      ? (queryStatement += " AND idconnectionGroups = ?")
      : (queryStatement += " WHERE idconnectionGroups = ?");
    queryParams.push(idConnectionGroups);
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
  const idConnectionGroups = req.query.idConnectionGroups;

  var queryStatement = "SELECT * FROM connectiongroups";
  var queryParams = [];

  if (idConnectionGroups != -1) {
    queryStatement += " WHERE idconnectionGroups = ?";
    queryParams.push(idConnectionGroups);
  }
  db.query(queryStatement, queryParams, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/users", (req, res) => {
  const id = req.body.idUsers;
  const displayName = req.body.displayName;
  const email = req.body.email;
  const authProvider = req.body.authProvider;
  db.query(
    "INSERT INTO users (id, displayName, email, authProvider) VALUES (?,?,?,?)",
    [id, displayName, email, authProvider],
    (err, result) => {
      if (err) {
        console.log(`Add User: Failure with MySQL: ${err}`);
      } else {
        // res.send("Values Inserted");
        res.send(result);
      }
    }
  );
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
