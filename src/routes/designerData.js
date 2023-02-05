const express = require('express');
const auth = require('../middleware/auth');
const designerModel = require('../models/designer');
const designerDataModel = require('../models/designerData');

const router = express.Router();
//changes here for the year end data
router.get('/*', auth, async (req, res) => {
//console.log('here----designer Data',req.query);
 let finalData="";
  try {
    const { email, year, quarter } = req.query;
    let data = await designerModel.findOne({ email });
    if(quarter){
      const quarterNum = Number(quarter.split('Q')[1]) - 1;
      finalData= data.data[year][quarterNum];
    }
    else{
      finalData= data.data[year];
    }
   
   
    //console.log("designer data-----",finalData.values);
    
    res.send(finalData.values);
  } catch (err) {
    res.status(400).json({ msg: 'designer data not found' });
  }
});

// end year end data

// router.post('/', auth, async (req, res) => {
//   try {
//     const { key, data } = req.body;
//     let designer = await designerDataModel.findOne({ key });

//     if (designer == null) {
//       designer = new designerDataModel({ key });
//     }

//     designer.values = data ? data.values : {};
//     designer.key = key;
//     //console.log("test:", key,designer.values);
//     // let doc = await designerDataModel.findOneAndUpdate(key, data, {
//     //     new: true,
//     //     upsert: true // Make this update into an upsert
//     //   });

//     await designer.save();
//     res.status(200).json({ msg: 'success' });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ msg: 'fail' });
//   }
// });

router.post('/', auth, async(req, res)=>{
      try{
        console.log(req.body);
       // const { email,year,quarter, data } = req.body; //before 
       const { key,email, data } = req.body;
       console.log("datadesigner",data);
        //let designer = await designerModel.findOne({ email });
        //console.log("HERE DESIGNER DATA",designer['data'][year][0]['values']['performace'])
        // if(designer==null){
        //     designer = new designerModel({ email });
        // }
        let designer = await designerModel.findOne({ email });
        if(designer==null){
               return new Error('designer not found')
               
           }
        
       //designer.data['2023'][0].values = data.values;
       // designer.key = key;
        //console.log("test:", key,designer.values);
        // let doc = await designerDataModel.findOneAndUpdate(key, data, {
        //     new: true,
        //     upsert: true // Make this update into an upsert
        //   });
        //designer['data']['2023'][0]['values'].push("manish")//=['manish'];
        
        //await designer.save();
        //console.log('Mansh here changes feedback: ',designer['data'][year][0]['values'])
        res.status(200).json({msg:'success'});
    }catch(err){
        console.log(err);
        res.status(400).json({msg:'fail'});
    }

});
const getQuarterUpdate=()=>{
  const updateData=res.data[year][quarter]
}

module.exports = router;
