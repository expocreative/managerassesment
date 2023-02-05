import React,{useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Paper, Select, MenuItem, Button,Divider} from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
//import { SelectChangeEvent } from '@mui/material/Select';
//import Checkbox from '@mui/material/Checkbox';

import { DesignerSelected, GetDesignerFeedback } from "../../redux/actions/Designers";
import { CSSGoalsHeader } from "../styles/CSSGoalsHeader";
import { QuarterChanged, ZoneChanged, DownloadSheet, YearChanged,DownloadSheetYear } from "../../redux/actions/Page";
import { MenuProps, useStyles, options } from "../../utils/ddl";

//duplicate function in goals left panel//
const getAssignedMembers = (arr, quarter, year, user) => {
   
    let list = [];
    arr.forEach(obj=>{
        let data = obj.data[year] && obj.data[year][Number(quarter.split('Q')[1])-1];
        if(data && data.manager && data.manager.toLowerCase() === user.name.toLowerCase()){
            list.push(obj);
        }
    })
    return list;
}


const GoalsHeader = ({designerList, quarter, zone, user, year, DesignerSelected, quarterList, yearsList,
                    QuarterChanged, YearChanged, DownloadSheet, ZoneChanged, GetDesignerFeedback,DownloadSheetYear}) => {

    
                        const classesDDL = useStyles();
                        const [selected, setSelected] = useState([]);
                        const isAllSelected =
                        designerList.length > 0 && selected.length === designerList.length;
                    
                        const handleChange = (event) => {
                            const value = event.target.value;
                            if (value[value.length - 1] === "all") {
                            setSelected(selected.length === designerList.length ? [] : designerList);
                            return;
                            }
                            setSelected(value);
                            //let isPublish=enableDownloadData()
                            

                            //await getMultiple({ id: 'asdf'}, { id: 'foo' }, { id: 'bar' })

                        };
    
        const getMultiple= async(...objectsToGet)=> {
            let users = [];
            // await Promise.all(objectsToGet.map(obj =>
            //   axios.get('/user/' + obj.id).then(response => {
            //     // do something with response
            //     users.push(response);
            //   })
            // ));
            return users;
          }
          
          // some other async context
          ////console.log(await getMultiple({ id: 'asdf'}, { id: 'foo' }, { id: 'bar' }));
                      
    

    const classes = CSSGoalsHeader();
    const membersList = getAssignedMembers([...designerList], quarter, year, user);
    //console.log(membersList)

    const getSheetData = () => {
        let listData = [];
       // //console.log(designerList)
        for(let j=0; j<designerList.length; j++){
            let obj = designerList[j];
            if(obj.data[year] && obj.data[year][Number(quarter.split('Q')[1])-1]
                && obj.data[year][Number(quarter.split('Q')[1])-1].zone.replace(/\s/g,'').toLowerCase() === zone.replace(/\s/g,'').toLowerCase()){
                    let tdata = {...obj.data[year][Number(quarter.split('Q')[1])-1]};
                    tdata = {...obj.data[year][Number(quarter.split('Q')[1])-1]};//await GetDesignerFeedback(obj, year, quarter);
                   //console.log(tdata.values.length)
                    tdata.values.length >= 1 && listData.push({
                        data:tdata,
                        name:obj.name,
                        designation:obj.designation
                    });
            }
        }
        return listData;
    }

    const enableDownloadData = () => {
        let value = false;
        for(let j=0; j<membersList.length; j++){
            if(membersList[j].data[year][Number(quarter.split('Q')[1])-1].publish){
                value = true;
                break;
            }
        }
       // console.log(membersList)
        return value;
    }
let missingData =[];
    const enableAllDownloadData = () => {
        missingData =[];
        let value = true;
        let commonElements = designerList.filter((element) => {
           return selected.includes(element.name)
        });
        console.log(commonElements)
        for(let j=0; j<commonElements.length; j++){
           
              if(!commonElements[j].data[year][Number(quarter.split('Q')[1])-1].publish){
                missingData.push(commonElements[j].name)
                value = false;
                break;
            }
        
           
        }
       // console.log(membersList)
        return value;
    }

    const downloadXLS = async() => {
        let tdata =  getSheetData();

       DownloadSheet(user.name, tdata, 'am');
    }
    const downloadYearXLS = async() => {
        //console.log(selected)
       const isAllDatapresent= enableAllDownloadData();
       //console.log(isAllDatapresent)
       if(isAllDatapresent){
        DownloadSheetYear(selected.toString(), year);
       }
       else{
        alert(missingData.toString()+"'"+'s data missing')
       }
       
    }
    

    const yearSelected = (evt) => {
        YearChanged(evt.target.value); DesignerSelected(undefined); 
        let zone = user.data[evt.target.value][Number(quarter.split('Q')[1])-1].zone;// ? user.data[evt.target.value][Number(quarter.split('Q')[1])-1].zone : 'Q1';
        ZoneChanged(zone);
    }

    const quarterSelected = (evt) => {
        QuarterChanged(evt.target.value); DesignerSelected(undefined); 
        ZoneChanged(user.data[year][Number(evt.target.value.split('Q')[1])-1].zone);
    }
    const memberSlected=(evt)=>{
        
    }

       

    return (
        <>
            <Paper className={classes.header} >
                <Select value={year} displayEmpty className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }} 
                    onChange={yearSelected} >
                    {
                        yearsList.map((val,index)=><MenuItem key={index} value={val}>{val}</MenuItem>)
                    }
                </Select>

                <Select value={quarter} displayEmpty className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }} 
                    onChange={quarterSelected}>
                    {
                        quarterList.map((val,index)=><MenuItem key={index} value={val}>{val}</MenuItem>)
                    }
                </Select>

                <label>{zone}</label>

                <Button disabled={!enableDownloadData()} variant="contained" color="primary"
                    onClick={()=>downloadXLS()}>download data</Button>
                    <Divider orientation="vertical" flexItem />
                {/* <Select value={membersList} displayEmpty className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }} 
                    onChange={memberSlected}>
                    {
                        membersList.map((val,index)=><MenuItem key={index} value={val.name}>{val.name}</MenuItem>)
                    }
                </Select> */}
        <FormControl className={classesDDL.formControl}>
      <InputLabel id="mutiple-select-label" style={{top:"-11px"}}> Select Designer </InputLabel>        
        <Select
                labelId="mutiple-select-label"
                multiple
                value={selected}
                onChange={handleChange}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                >
        {/* <MenuItem
          value="all"
          classes={{
            root: isAllSelected ? classesDDL.selectedAll : ""
          }}
        >
          <ListItemIcon>
            <Checkbox
              classes={{ indeterminate: classesDDL.indeterminateColor }}
              checked={isAllSelected}
              indeterminate={
                selected.length > 0 && selected.length < options.length
              }
            />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classesDDL.selectAllText }}
            primary="Select All"
          />
        </MenuItem> */}
         {designerList.map((val,i) => (
          <MenuItem key={i} value={val.name}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(val.name) > -1} />
            </ListItemIcon>
            <ListItemText primary={val.name} />
          </MenuItem>
        ))}
      </Select>
      </FormControl>
      
                <Button disabled={(selected.length<1 && enableDownloadData())} variant="contained" color="primary"
                    onClick={()=>downloadYearXLS()}>download yearly  </Button>                        
            </Paper>
            
        </>
    )
}

const mapStateToProps = state => {
    return {
        zone:state.default.zone,
        year:state.default.year,
        quarter:state.default.quarter,
        designerList:state.designers.designersList,
        quarterList:state.default.quarterList,
        yearsList:state.default.yearsList,
        user:state.auth.user
    }
}

GoalsHeader.propTypes = {
    zone:PropTypes.string,
    quarterList:PropTypes.array,
    yearsList:PropTypes.array,
    year:PropTypes.string,
    quarter:PropTypes.string,
    designerList:PropTypes.array,
    DesignerSelected:PropTypes.func,
    QuarterChanged:PropTypes.func,
    YearChanged:PropTypes.func,
    DownloadSheet:PropTypes.func,
    user:PropTypes.object,
    ZoneChanged:PropTypes.func,
    GetDesignerFeedback:PropTypes.func

}

export default connect(mapStateToProps, {DesignerSelected, QuarterChanged, YearChanged, DownloadSheet, ZoneChanged, GetDesignerFeedback,DownloadSheetYear}) (GoalsHeader);