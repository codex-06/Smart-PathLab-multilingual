const express = require('express');
const router = express.Router();
const data = require('../public/cbcData.json');



router.post('/', (req, res) => {
  const requestBody = req.body;

  if (!requestBody || !requestBody.report) {
    return res.status(400).send('Invalid request body');
  }

  const { sex, age } = requestBody.info;
  const age_group = age < 18 ? '0-17' : age < 50 ? '18-49' : '50+';

  const resdata = {
    "en" : {},
    "hi":{}
  };
  const languages = ["en", "hi"];
  for (const key in requestBody.report) {
    if (requestBody.report.hasOwnProperty(key) && data["en"][key]){
      const reference = data["en"][key]["Reference Values"][sex][age_group];
      const paramvalue = requestBody.report[key];
      
      for( const language of languages) {
        const paramobj = {
          description: data[language][key]["What It Is"]
        };
        
        if (paramvalue < reference["Lower Limit"]) {
          paramobj.result = "below limit";
          paramobj.effects = data[language][key]["Effects"]["Below Limit"];
          paramobj.causes = data[language][key]["Possible Causes"]["Below Limit"];
          paramobj.preventions = data[language][key]["Preventions"]["Below Limit"];
          
        } else if (paramvalue <= reference["Upper Limit"]) {
          paramobj.result = "ok";
        } else 
        paramobj.result = "above limit";
        paramobj.effects = data[language][key]["Effects"]["Above Limit"];
        paramobj.causes = data[language][key]["Possible Causes"]["Above Limit"];
        paramobj.preventions = data[language][key]["Preventions"]["Above Limit"];
      
        
        resdata[language][key] = paramobj;
        console.log("paramobj")
      }
    }
  }
  
  res.send(resdata);
  });

module.exports = router;
