const express = require('express');
const app = express(); //-- http szervert tudunk vele 

//átírányitások kezelése miatt kell
const cors = require('cors');
app.use(cors());

// JSON adatok fogadása miatt
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tagdij'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
})

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/bela', (req, res) => {
    res.send('Ez Béla lapja');
});

app.get('/bela/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Ez Béla lapja, id: ${id}`);
});

app.get('/bela/:id/:nev', (req, res) => {
    let id = req.params.id;
    let nev = req.params.nev;
    res.send(`Ez Béla lapja, id: ${id}, neve: ${nev}`);
});

app.post('/bela', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    res.send(`Ez Béla lapja, id: ${id}, neve: ${name}`);
});

app.get('/tagok', (req, res) => {
    let sqlcommand = 'SELECT * FROM ugyfel';
    db.query(sqlcommand, (err, rows) => {
        if(err) throw err;
        res.send(rows);
    });
});

app.get('/tagok/:id', (req, res) => {
    let sqlcommand = `SELECT * FROM ugyfel WHERE azon = ${req.params.id}`;
    db.query(sqlcommand, (err, rows) => {
        if(err) throw err;
        res.send(rows);
    });
});

app.listen(3000, () => {
    console.log('Server is runinng on port 3000');
});

