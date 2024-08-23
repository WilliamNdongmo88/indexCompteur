const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
  app.use((req, res) => {
    res.json([
        { "reference": "1297235263", "index": 451, "dernier date releve index": "Jeudi 25 Novembre 2021"},
        {
            "reference": "4852916374",
            "index": 871,
            "dernier_date_releve_index": "Lundi 18 Avril 2022"
          },
          {
            "reference": "9632741850",
            "index": 345,
            "dernier_date_releve_index": "Dimanche 9 Septembre 2021"
          },
          {
            "reference": "7418529630",
            "index": 562,
            "dernier_date_releve_index": "Vendredi 3 Février 2023"
          },
          {
            "reference": "2963741580",
            "index": 725,
            "dernier_date_releve_index": "Jeudi 14 Novembre 2022"
          },
          {
            "reference": "1482963750",
            "index": 499,
            "dernier_date_releve_index": "Mardi 22 Juin 2021"
          }
    ]); 
 });

module.exports = app;