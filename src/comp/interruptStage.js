import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './Card';
import ViewIDT from './IDT_dialog'
import {ALL_STATE_VALS} from '../_allStates';

let width = window.innerWidth;
let height = window.innerHeight;

const useStyles = makeStyles({
    column:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width:width*0.5,
    },
});

export default function InterruptStage(props) {
    const classes = useStyles();
    const count = props.count;
    
    const states =  ALL_STATE_VALS(props.interrupt);

    const lightOn=(n)=>{
        return n.some(function(item, index) { return item === count; })
      }
    
    return (
      <div style={{display:'flex',height:height*0.8}}>
  
        <div className={classes.column}>
          <SimpleCard on={lightOn([6,10,11,12])} title={"Process"} description={
              <div>
                <p>PSW : {states[count].process.psw}</p>               
              </div>}/>
        </div>

        <div className={classes.column}>
            <div>
            <ViewIDT interrupt={props.interrupt} plusCount={props.plusCount} count={lightOn([8])}/>
            <br/>
            <SimpleCard on={lightOn([6,9,11])} title={"PC"} description={<div>{states[count].pc}</div>} />
            <br/>
            <SimpleCard on={lightOn([7])} title={"PCB"} description={
              <div>
                <p>Program Counter : {states[count].pcb.pc}</p>
                <p>Contents of Regsters : {states[count].pcb.psw}</p>
              </div>}/>
            </div>
        </div>

      </div>
    );
  }
