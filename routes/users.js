var express = require('express');
var router = express.Router();
const axios = require('axios');
const { response } = require('../app');
const { parse, stringify } = require('flatted');

const getsmt = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

//https://www.themealdb.com/api/json/v1/1/categories.php

/* GET users listing. */
router.get('/', async function (req, res, next) {
  let output, output2;

  let countries = await getsmt(
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
  ).then((response) => {
    //console.log(response);
    output = response.data;
    console.log(output);
  });

  let cate = await getsmt(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  ).then((response) => {
    //console.log(response);
    output2 = response.data.categories;
    console.log(output2);
  });

  res.render('home', { meals: output.meals, categories: output2 });
});

// paramsdan id yi çekip id ile get yapcan geleni ejs e atacan

//

module.exports = router;
