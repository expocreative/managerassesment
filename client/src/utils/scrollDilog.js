import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [myProp, setMyProp] = useState(props.managefeedback);
  const [scroll, setScroll] = React.useState('paper');
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [isReadOnlyTrue,setisReadOnly]= useState(false)
 

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    console.log("save")
    props.clickManagerHandler(myProp)
    setOpen(false);
  };
  const handleChange = (newValue) => {
   
    setMyProp(newValue);
    
  }  

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    let isReadyTrue= props.isEnabled ? true:false
    setisReadOnly(isReadyTrue)
    
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div >
      {console.log("test",props.isEnabled)}
      <span style={{float:'right', right: '0px',marginBottom:'-7px'}}onClick={handleClickOpen('paper')} ><AspectRatioIcon /></span>
      <Dialog    
         fullWidth={fullWidth}
         maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        
        <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')} */}
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={60}
          value={myProp}
          variant="outlined"
          fullWidth          
          height='300px'
          onChange={(e) => handleChange(e.target.value)}
          InputProps={{
            readOnly: isReadOnlyTrue
          }}
          
        />
           {console.log(props.isEnabled,'dilog')}   
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button disabled={props.isEnabled =='manager'} onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
