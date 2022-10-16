const express = require('express');
let axios = require('axios');
const router = new express.Router();
const ExpressError = require("../expressError");
//const { init } = require('../app');

router.post("", function(req, res, next){
  try {
    if (!req.body.developers) throw new ExpressError("Developer Username is required", 400);


    let results = req.body.developers.map(async function(d){
      await axios.get(`https://api.github.com/users/${d}`);
    });

    let temp = res.json(results);
    console.log(temp);
  }
/** 
    let out = temp.map(function(r){
        ({ name: r.data.name, bio: r.data.bio })
      });

     let final = res.json(out);
     console.log(final);
    }

    */
    catch (e) {
      console.log(e)
    return next(e)
  }
});


//return res.send(JSON.stringify(out));
/**
 * try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } 
 */
  
/**
router.get("/", function(req, res) {
  return res.json(users);
});
 */


module.exports = router;