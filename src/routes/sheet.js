const express = require('express');
const Excel = require('exceljs');
const tempfile = require('tempfile');
const auth = require('../middleware/auth');
const designerModel = require('../models/designer');
const designerDataModel = require('../models/designerData');
const path = require('path');

const router = express.Router();
const { sheetStyle, fillValues,fillValuesSlectedDesignerYr } = require('./designersSheetStyle');


  
router.post('/yearfeedback',auth, async(req, res)=>{
    console.log('yearfeedback')
        const {name,year}=req.body;
        const namearr= name.split(','); //["Ashish Kumar, Manish Rao"]
        let finalData=[];
        console.log("mani",namearr)
        let index=0;

        
        const intiValue = async() => {
            let temail= namearr[index].toLowerCase().split(" ").join().replace(',','.')+'@vdx.tv';//split('@')[0].replace('.',' ');
            let data =  await designerModel.findOne({ email:temail });
            let tdata=  await data.data[year] ;
            finalData[index]=tdata;        
            index++;
            if(index<namearr.length){  await intiValue(); }
        }
        await intiValue();
        var workbook = new Excel.Workbook();
        let mdta;
       //console.log("::::::",finalData)


       let j=0;
       for (let i = 0; i < finalData.length; i++) {
            var worksheet = workbook.addWorksheet(namearr[i]);
            worksheet = sheetStyle(worksheet); 
                      
            let rowIndex = 2;
            j=0;
            tfillValues(i, rowIndex);
        }

        function tfillValues(i, rowIndex){
            console.log(i);
            let tobj = fillValuesSlectedDesignerYr(worksheet, {name:namearr[i], designation:"designation", data:finalData[i][j]}, rowIndex);
            worksheet = tobj.worksheet;
            rowIndex = tobj.totalCell+2;
            j++;
            if(j<finalData[i].length){
                tfillValues(i, rowIndex);
            }
        }
        
       
       let tempFilePath = tempfile('year_end.xlsx');
        //console.log(workbook)
        await workbook.xlsx.writeFile(tempFilePath);
        res.sendFile(tempFilePath, function(err){
        console.log('file downloaded successfully');
     
    })
})

// function fillVal(worksheet,namearr,ldata,rowIndex,i){
//     let tobj = fillValues(worksheet, {name:namearr[i]+"-"+Math.random(), designation:"designation", data:ldata}, rowIndex);
//     worksheet = tobj.worksheet;
//     rowIndex = tobj.totalCell+2;
// }

router.post('/rotation', async (req, res)=>{
    console.log('rotation')
    const { data } = req.body;
    try {
        var workbook = new Excel.Workbook();
        var worksheet = workbook.addWorksheet('Rotation');
        worksheet.mergeCells('A1:F1');
        worksheet.getCell('A1').value = data.quarter+" - "+data.year;

        let arrCells = ['A','B','C','D','E', 'F'];
        data.list.forEach((obj, index)=>{
            worksheet.getCell(arrCells[index]+'2').value = obj.zone;
            let clrTitle = 'ff00518e';
            if(obj.zone.search("EU") != -1){
                clrTitle = 'ff007a37';
                clrCol = 'ff92d050';
            }else if(obj.zone.search("US") != -1){
                clrTitle = 'ffff0000';
                clrCol = 'ffffcc66';
            }

           for(let j=3; j<=11; j++){
                worksheet.getCell(arrCells[index]+''+j).fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'fff2f2f2'} };
            }

            let tindex = 3;
            obj.list.forEach(tobj=>{
                let clrCol = tobj.designation.toLowerCase().search('manager')!=-1 ? 'ff0070c0' : 'ff00b0f0';
                let fontClr = tobj.designation.toLowerCase().search('developer')!=-1?'ffffffff':'ff000000';
                if(obj.zone.search("EU") != -1){
                    clrCol = tobj.designation.toLowerCase().search('manager')!=-1 ? 'ff00b050' : 'ff92d050';
                }else if(obj.zone.search("US") != -1){
                    clrCol = tobj.designation.toLowerCase().search('manager')!=-1 ? 'ffffc000' : 'ffffcc66';
                }
                clrCol = tobj.designation.toLowerCase().search('developer')!=-1 ? 'ff003760' : clrCol;
                
                worksheet.getCell(arrCells[index]+''+tindex).value = tobj.name;
                worksheet.getCell(arrCells[index]+''+tindex).fill = { type: 'pattern', pattern:'solid', fgColor:{argb:clrCol} };
                worksheet.getCell(arrCells[index]+''+tindex).font = { name: 'Arial', color: { argb: fontClr }, family: 1, size: 10 };
                worksheet.getCell(arrCells[index]+''+tindex).alignment = { vertical: 'middle', horizontal: 'center' };
                tindex++;
            });

            worksheet.getColumn(Number(index+1)).width = 40;
            worksheet.getCell(arrCells[index]+''+2).fill = { type: 'pattern', pattern:'solid', fgColor:{argb:clrTitle} };
            worksheet.getCell(arrCells[index]+''+2).font = { name: 'Arial', color: { argb: 'FFFFFFFF' }, family: 4, size: 12, bold:true };
            worksheet.getCell(arrCells[index]+''+3).font = { name: 'Arial', color: { argb: 'FFFFFFFF' }, family: 1, size: 11 };
            
            worksheet.getCell(arrCells[index]+'12').alignment = { vertical: 'middle', horizontal: 'center' };
            worksheet.getCell(arrCells[index]+'12').fill = { type: 'pattern', pattern:'solid', fgColor:{argb:'ffffcc99'} };
            worksheet.getCell(arrCells[index]+'12').value = obj.list.length;

            const border = {style:'medium', color: {argb:'FFFFFFFF'}};
            worksheet.getColumn(Number(index+1)).border = { top:border, left:border, bottom:border, right:border };
        });

        worksheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' };
        worksheet.getCell('A1').fill = { type: 'pattern', pattern:'solid', bgColor:{argb:'FF000000'} };
        worksheet.getCell('A1').font = { name: 'Arial Black', color: { argb: 'FFFFFFFF' }, family: 1, size: 13 };

        let tempFilePath = tempfile('rotation.xlsx');//path.join(__dirname, '../../sheet/rotation.xlsx');
        await workbook.xlsx.writeFile(tempFilePath);

        res.sendFile(tempFilePath, function(){
            console.log('file downloaded successfully');
        });

        //res.status(200).send(rotationPath);
    } catch(err) {
        res.status(400).json({msg:'file not found'});
    }
});

router.post('/amFeedback/*', async(req, res)=>{
    
    let data = req.body.data;
    console.log(data)
    try{
        var workbook = new Excel.Workbook();
        var worksheet = workbook.addWorksheet(data[0].data.quarter);
        worksheet = sheetStyle(worksheet);

        let rowIndex = 2;

        data.forEach(obj=>{
            let tobj = fillValues(worksheet, {name:obj.name, designation:obj.designation, data:obj.data}, rowIndex);
            //console.log(obj.data)
            worksheet = tobj.worksheet;
            rowIndex = tobj.totalCell+1;
        })

        worksheet.mergeCells("'A2:A"+Number(rowIndex-1)+"'");
        
        let tempFilePath = tempfile('tmp.xlsx');
        await workbook.xlsx.writeFile(tempFilePath);

        res.sendFile(tempFilePath, function(err){
            console.log('file downloaded successfully');
        })
    }catch(err){
        res.status(400).json({msg:'file not found'});
    }
})

router.post('/teamFeedback/*', async(req, res)=>{
    //console.log(name,"teamFeedback")
    let allData = req.body.data;
    //console.log('manish',allData)
    try{
        var workbook = new Excel.Workbook();
        allData.forEach(obj => {
            if(obj.am.length >= 2){
                var worksheet = workbook.addWorksheet(obj.am);
                worksheet = sheetStyle(worksheet);
                let rowIndex = 2;
                //console.log(obj.arr)
                obj.arr.forEach(dobj => {
                 // console.log("dobj.data",dobj.data)
                    if(dobj.data && dobj.data.publish){
                        let tobj = fillValues(worksheet, {name:dobj.name, designation:dobj.designation, data:dobj.data}, rowIndex);
                        worksheet = tobj.worksheet;
                        rowIndex = tobj.totalCell+1;
                        console.log(tobj.totalCell)
                    }
                });
                
                worksheet.mergeCells("'A2:A"+Number(rowIndex-1)+"'");
                console.log("rowIndex",rowIndex)
            }
        });
       // console.log()
        var tempFilePath = tempfile('teamfile.xlsx');
        // console.log("worksheet",worksheet)
        // console.log("tempFilePath",tempFilePath)
        await workbook.xlsx.writeFile(tempFilePath);
        res.sendFile(tempFilePath, function(err){
            console.log('file downloaded successfully');
        })
    }catch(err){
        res.status(400).json({msg:'file not found'});
    }
})

router.post('/feedback/*', async(req, res)=>{
     const {name, designation, data} = req.body.data;
    
    
   // console.log(name,designation,data)
    try {
        
        var workbook = new Excel.Workbook();
        var worksheet = workbook.addWorksheet(data.quarter);
        
        worksheet = sheetStyle(worksheet);
        let tobj = fillValues(worksheet, {name:name, designation:designation, data:data}, 2);
        
        worksheet = tobj.worksheet;
        //worksheet.mergeCells("'A2:A"+Number(tobj.totalCell-1)+"'");
        console.log("tobj",worksheet)
        var tempFilePath = tempfile('tmp.xlsx');
        
        await workbook.xlsx.writeFile(tempFilePath);

        res.sendFile(tempFilePath, function(err){
            console.log('file downloaded successfully');
        })
    } catch(err) {
        res.status(400).json({msg:'file not found'});
    }
});


router.post('/remove', (req, res)=>{
    let {filePath} = req.body.data;
    try{
        fs.unlinkSync(filePath);
        res.status(200).json({msg:'file removed'});
    }catch(err){
        res.status(400).json({msg:'file not found'});
    }
});

module.exports = router;