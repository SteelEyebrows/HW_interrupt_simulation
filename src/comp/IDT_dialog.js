import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  tablerow:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:100,
    height:50
  },
});

export default function ViewIDT(props) {

const topen = props.count;

  return (
    <div align="center">
      <Button variant="outlined" color="primary" >
        IDT
      </Button>
      <Dialog
        open={topen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div align="center" style={{width:300}}>
            <p>Interrupt Description Table</p>
        </div>
        <DialogContent>
           <Divider/>
           <Tablerow main={false} num={props.interrupt-1}/>
           <Tablerow main={true} num={props.interrupt}/>
           <Tablerow main={false} num={props.interrupt+1}/>
           <Divider/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.plusCount} color="primary" autoFocus>
            Pass to PC
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function Tablerow(props){
  const classes = useStyles();
  const {num,main} = props;

  return(
    <div style={{display:'flex',backgroundColor:main?"#3F51B5":"#fff"}}>
      <div className={classes.tablerow}>
          {main?<b>{num}</b>:<p>{num}</p>}
      </div>
      <div className={classes.tablerow}>
          {main?<b>{`#${num}`}</b>:<p>{`#${num}`}</p>}
      </div>
    </div>
  )
}