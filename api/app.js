let dictionary = [];

const express = require("express");
const fs = require("fs");

var app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// GET-pyyntö "/words"-reitille
app.get("/words/:word", function (req, res) {
  const wordParam = req.params.word;

  // Sanakirjatiedoston lukeminen
  const data = fs.readFileSync("./dictionary.txt", {
    encoding: "utf8",
    flag: "r",
  });

  const splitLines = data.split(/\r?\n/);

  splitLines.forEach((line) => {
    const words = line.split(" ");
    const word = {
      fin: words[0],
      eng: words[1],
    };
    dictionary.push(word);
  });

  // Sanan etsiminen sanakirjasta
  const foundWord = dictionary.find((word) => word.fin === wordParam);

  if (foundWord) {
    res.json(foundWord.eng);
  } else {
    res.status(404).json(`Sanaa ${wordParam} ei löytynyt.`);
  }
});

// POST-pyyntö "/words"-reitille
app.post("/words", function (req, res) {
  const newFinnishWord = req.body.fin;
  const newEnglishWord = req.body.eng;

  // Sanaparin lisääminen sanakirjatiedostoon
  fs.appendFile(
    "./dictionary.txt",
    `\n${newFinnishWord} ${newEnglishWord}`,
    function (err) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Virhe" });
      } else {
        res.status(200).json({
          message: `Sanat ${newFinnishWord} - ${newEnglishWord} lisätty sanakirjaan.`,
        });
      }
    }
  );
});

var server = app.listen(5001, function () {
  console.log("Express App running at http://127.0.0.1:5001/");
});
