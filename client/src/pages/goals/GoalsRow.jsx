import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { Grid, NativeSelect, TextField } from '@material-ui/core';
import MultiSelect from './MultiSelect.jsx';
import { CSSGoalsRow } from '../styles/CSSGoalsRow';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import ScrollDialog from '../../utils/scrollDilog.js';



const GoalsRow = (props) => {
  let manegercommentdisable;
  if(props.parentpage=='feedback' && props.enabled){
    manegercommentdisable=true
  }
  else{
    manegercommentdisable=false;
  }
  const ratingOptions = [
   "Select Rating",
    "New to the job or is developing and need frequent guidance",
   "Good, but still has room to grow",
   "Excellent and completely satisfied with performance",
    "Outstanding and far exceeds performance",
   
  ]
  const classes = CSSGoalsRow();
  const [data, setData] = useState(props.data);
  const msgStr =
    'a. HIGHLIGHTS:\n\nb. CONSTRUCTIVE AREAS:\n\nc. PROGRESSIVE AREAS:';
    console.log("----",props.enabled)
  useEffect(() => {
    if (data !== props.data) {
      
      setData(props.data);
    }
  }, [props.data]);

  const valueChangeHandler = (value, index) => {
    let arr = [...data.performance];
    let obj = { ...arr[index] };
    let key = Object.keys(obj)[0];
    obj[key] = value.join('|');
    arr[index] = obj;
    setData({ ...data, performance: arr });
    props.changeHandler({ ...data, performance: arr });
  };
  const handleFocus = (evt) => {
    if (evt.target.value === '') {
      evt.target.value += '• ';
    }
  };
  //let previousLength = 0;
  const handleInput = (event) => {
    // const bullet = "\u2022";
    // const newLength = evt.target.value.length;
    // const characterCode = evt.target.value.substr(-1).charCodeAt(0);
    // console.log(evt.keyCode)
    // if (newLength > previousLength) {
    //     if (characterCode === 10) {
    //         evt.target.value = `${evt.target.value}${bullet} `;

    //     } else if (newLength === 1) {
    //         if(evt.keyCode == 13){
    //             if(evt.keyCode == 16){

    //             }
    //             else{
    //                 evt.target.value = `${bullet} ${evt.target.value}`;
    //             }
    //         }

    //     }
    // }

    // previousLength = newLength;

    let keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == 13) {
      if (!event.shiftKey) {
        event.target.value += '• ';
      } else {
        event.target.value += ' ';
      }
    }
    var txtval = event.target.value;
    if (txtval.substr(txtval.length - 1) == '\n') {
      event.target.value = txtval.substring(0, txtval.length - 1);
    }
  };
  const ratingChanged = (evt) => {
    console.log(evt.target.value)
    setData({ ...data, rating: evt.target.value });
    props.changeHandler({ ...data, rating:evt.target.value });
  };
  
  const feedbackChanged = (evt, index) => {
    //var str = evt.target.value;

    //var res = str.replace("External QC fail", "<span style={{ color: 'red' }}>External QC fail</span>");
    // console.log(res)
    //document.getElementsByName('feedback_'+index)[0].innerHTML = res;
    if (props.lastItem) {
      setData({ ...data, feedback: evt.target.value });
      props.changeHandler({ ...data, feedback: evt.target.value });
    } else {
      let performance = [...data.performance];
      let pobj = { ...performance[Number(evt.target.name.split('_')[1])] };
      pobj.feedback = evt.target.value;
      performance[Number(evt.target.name.split('_')[1])] = pobj;
      setData({ ...data, performance: performance });
      props.changeHandler({ ...data, performance: performance });
    }
    props.textSelected({ text: '' });
  };
  const managerFeedbackChanged = (evt, index) => {
    //var str = evt.target.value;

    //var res = str.replace("External QC fail", "<span style={{ color: 'red' }}>External QC fail</span>");
    // console.log(res)
    //document.getElementsByName('feedback_'+index)[0].innerHTML = res;
    if (props.lastItem) {
      setData({ ...data, managerfeedback: evt.target.value });
      props.changeHandler({ ...data, managerfeedback: evt.target.value });
    } else {
      console.log("else")
      let performance = [...data.performance];
      let pobj = { ...performance[Number(evt.target.name.split('_')[1])] };
      pobj.managerfeedback = evt.target.value;
      performance[Number(evt.target.name.split('_')[1])] = pobj;
      setData({ ...data, performance: performance });
      props.changeHandler({ ...data, performance: performance });
    }
    props.textSelected({ text: '' });
  };

  const textSelected = (evt) => {
    props.textSelected({
      text: document.getSelection().toString(),
      x: evt.clientX,
      y: evt.clientY,
    });
  };

  const preFeedbackFound = (index, key) => {
    if (props.prevFeedback) {
      return props.lastItem
        ? props.prevFeedback.feedback.length >= 2
        : props.prevFeedback.performance[index][key].length >= 2;
    }
    return false;
  };
  const preManagerFeedbackFound = (index, key) => {
    if (props.prevFeedback) {
      return props.lastItem
        ? props.prevFeedback.managerfeedback.length >= 2
        : props.prevFeedback.performance[index][key].length >= 2;
    }
    return false;
  };

  
  const amhangeValue=(testitem,index)=>{
    let performance = [...data.performance];
      let pobj = { ...performance[index] };
      pobj.feedback = testitem;
      performance[index] = pobj;
      setData({ ...data, performance: performance });
      props.changeHandler({ ...data, performance: performance });
    
      
}
  const saveManagerChangeValue=(testitem,index)=>{
    
      let performance = [...data.performance];
      let pobj = { ...performance[index] };
      pobj.managerfeedback = testitem;
      performance[index] = pobj;
      setData({ ...data, performance: performance });
      props.changeHandler({ ...data, performance: performance });
    
  }

  return (
    <Grid
      className={classes.root}
      container
      direction='column'
      onMouseUp={textSelected}
    >
      <Grid
        className={classes.heading}
        container
        direction='row'
        justify='space-between'
        style={{
          backgroundColor:
            props.prevFeedback && props.prevFeedback.rating !== -1 && '#fff8ad',
        }}
      >
        <label>{data.key}</label>
        <div
          style={{
            display: 'flex',
            width: '180px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Rating
          {/*<Rating disabled={!props.enabled} name={'rating_'+data.id} value={data.rating} 
                            precision={1} max={4} onChange={ratingChanged} />*/}
          <NativeSelect
            style={{ marginLeft: '15px' }}
            disabled={!props.enabled}
            value={data.rating}
            name={'rating_' + data.id}
            onChange={ratingChanged}
            inputProps={{ 'aria-label': 'age' }}
          >
            {ratingOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
            {/* <option value='NaN' disabled>
              Select Rating
            </option>
            <option value={1}>
              New to the job or is developing and need frequent guidance
            </option>
            <option value={2}>Good, but still has room to grow</option>
            <option value={3}>
              Excellent and completely satisfied with performance
            </option>
            <option value={4}>Outstanding and far exceeds performance</option> */}
          </NativeSelect>
        </div>
      </Grid>

      <Grid
        className={classes.subHeading}
        container
        direction='row'
        justify='space-between'
        style={{
          height: props.lastItem
            ? !props.extraFeedback
              ? window.innerHeight - 440
              : window.innerHeight - 690
            : window.innerHeight - 440,
        }}
      >
       
        <Grid container className={classes.col1}>
          {data.performance.map((obj, index) => {

                        let key = Object.keys(obj)[0];
                        let optionKey = Object.keys(obj)[1];
                        
                        return (
              <Grid
                container
                direction='row'
                className={classes.row}
                key={index}
                justify='space-between'                
              >
                <h4
                  className={classes.label}
                  style={{ maxWidth: props.lastItem && '33%' }}
                >
                  {key}
                </h4>

                {obj[key] !== '/' && (
                  <MultiSelect
                    enabled={props.enabled}
                    bgclr={preFeedbackFound(index, key)}
                    key={index}
                    data={obj[key]}
                    options={obj[optionKey]}
                    changeHandler={(values) =>
                      valueChangeHandler(values, index)
                    }
                  />
                )}

                <div
                  className={classes.textAreaHolder}
                  style={{ marginTop: props.enabled && '-23px' }}
                >
                  {props.page !== 'feedback' && props.enabled && (
                    <div
                      style={{
                        textAlign: 'right',
                        cursor: 'pointer',
                        visibility: 'hidden',
                      }}
                      onClick={() => props.showModel(true, index)}
                    >
                      <FullscreenIcon color='secondary' fontSize='small' />
                    </div>
                  )}
                  <div>
                  <ScrollDialog style={{marginTop:'10px'}} managefeedback={
                        props.lastItem
                          ? data.feedback.length < 2
                            ? msgStr
                            : data.feedback
                          : data.performance[index].feedback
                      } clickManagerHandler={(testitem)=>amhangeValue(testitem,index)} isEnabled={manegercommentdisable} />
                    <textarea
                      disabled={!props.enabled }
                      name={'feedback_' + index}
                      className={classes.textArea}
                      onChange={(evt) => feedbackChanged(evt, index)}
                      value={
                        props.lastItem
                          ? data.feedback.length < 2
                            ? msgStr
                            : data.feedback
                          : data.performance[index].feedback
                      }
                      placeholder='your feedback here'
                      style={{
                        
                        resize: 'vertical',
                        backgroundColor:
                          preFeedbackFound(index, 'feedback') && 'yellow',
                      }}
                      row='1'
                    />

</div>
                    
                    
                    {(obj.managerfeedback?.length >2 || props.user.type !="manager") && <div style={{marginTop:"10px",marginBottom:"10px"}}>Reviewer's Comment<ScrollDialog managefeedback={obj.managerfeedback} clickManagerHandler={(testitem)=>saveManagerChangeValue(testitem,index)} isEnabled={!manegercommentdisable} />
                    {console.log(props.user.type)}
                    <textarea                    
                      disabled={!manegercommentdisable}
                      name={'managerfeedback_' + index}
                      className={classes.textArea}
                      onChange={(evt) => managerFeedbackChanged(evt, index)}
                      value={
                        obj.managerfeedback
                      }
                      placeholder='your manager feedback here'
                      style={{
                        resize: 'vertical',
                        
                      }}
                      row='2'
                    />
                    </div> 
                    } 
                    
                  
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const stateToProps = (state) => {
  return {
    page: state.default.page.toLowerCase(),
    user:state.auth.user,
  };
};


export default connect(stateToProps, null)(GoalsRow);
