const express = require('express');
const fs = require('fs');
const app = express();

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello, World!'});
});
// 提供公钥的路由
app.get('/jwks/public_key.pem', (req, res) => {
    fs.readFile('../assets/public_key.pem', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading public key');
            return;
        }
        res.set('Content-Type', 'application/x-pem-file');
        res.send(data);
    });
});
module.exports = app;