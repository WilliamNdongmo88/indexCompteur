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
        { "Ville": "Bafoussam","Adresse": "Ancien Plateau, BP 123","reference": "1297235263", "index": 451, "dernier date releve index": "Jeudi 25 Novembre 2021"},
        {   
            "Ville": "Dschang",
            "Adresse": "Château, Rue de la Paix",
            "reference": "4852916374",
            "index": 871,
            "derniere_date_releve_index": "18/05/2022"
          },
          { 
            "Ville": "Bangangté",
            "Adresse": "Centre-Ville, BP 159",
            "reference": "9632741850",
            "index": 345,
            "derniere_date_releve_index": "09/09/2024"
          },
          {
            "Ville": "",
            "Adresse": "",
            "reference": "7418529630",
            "index": 562,
            "derniere_date_releve_index": "03/02/2023"
          },
          {
            "Ville": "",
            "Adresse": "",
            "reference": "2963741580",
            "index": 725,
            "derniere_date_releve_index": "14/11/2022"
          },
          {
            "Ville": "",
            "Adresse": "",
            "reference": "1482963750",
            "index": 499,
            "derniere_date_releve_index": "22/06/2023"
          }
    ]); 
 });

module.exports = app;