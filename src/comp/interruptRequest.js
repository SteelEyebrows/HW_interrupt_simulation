import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './Card';
import {ALL_STATE_VALS} from '../_allStates';
import SelectInterrupt from './selectIntterrupt';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

let width = window.innerWidth;
let height = window.innerHeight;

const useStyles = makeStyles({
  page:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:height*0.8
  },
});

export default function InterruptRequest(props) {
  const classes = useStyles();
  const count = props.count
  const states =  ALL_STATE_VALS(props.interrupt);

  const lightOn=(n)=>{
    if(n.some(function(item, index) { return item === count; })) return true; 
    else return false;
  }

    return (
      <div className={classes.page}>
        <SelectInterrupt setInterrupt={props.setInterrupt} plusCount={props.plusCount} count={lightOn([0])}/>
        {
          lightOn([1])?
          <img width={100} height={100} src={"hardware2.png"} alt="hardware"/>:
          <img width={100} height={100} src={"hardware.png"} alt="hardware"/>
        }
        <ArrowRightIcon fontSize="large" color={lightOn([1])?"primary":"disabled"}/>
        <SimpleCard on={lightOn([1,2,4,5])} title={"APIC"} description={<div>{states[count].apic}</div>} />
        {
          lightOn([4])?
          <ArrowLeftIcon fontSize="large" color="primary"/>:
          <ArrowRightIcon fontSize="large" color={lightOn([2,5])?"primary":"disabled"}/>
        }
        <SimpleCard on={lightOn([2,3,4,5])} title={"CPU"} description={<div>{states[count].cpu}</div>}/>       
      </div>
    );
  }

