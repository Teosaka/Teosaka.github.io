'use strict';
(function() {

  window.addEventListener('load', init);

  function init() {
    document.getElementById("submit").addEventListener('click', submit);
  }

  async function submit() {
    try {
      let db = await getDBConnection();
      let comment = document.getElementById("textBox").value;
      let query = "INSERT INTO Comments (Comment) VALUES (?)";
      db.run(query, [comment]);
      db.close();
      updateText();
    }
    catch (error) {
      console.log(error);
    }
  }

  async function updateText() {
    let db = await getDBConnection();
    let query = "SELECT * FROM Comments";
    let results = await db.all(query);
    db.close();
    console.log(results);
  }


  const sqlite3 = require("sqlite3");
  const sqlite = require("sqlite");

  async function getDBConnection() {
    const db = await sqlite.open({
      filename: 'logs.db',
      driver: sqlite3.Database
    });
    return db;
  }




})();