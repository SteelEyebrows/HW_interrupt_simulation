import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Wave from 'react-wavify'
import CodeIcon from '@material-ui/icons/Code';


export default function SimpleCard(props) {

  const MainColor = props.on?'#3F51B5':"#ddd";
  
  return (

      <Card >
        <div style={{height:20,width:300,backgroundColor:MainColor}}/>
        {
          props.on?
          <div style={{backgroundColor:MainColor,height:30,width:300}}>
          <Wave fill={'#fff'}
          paused={false}
          options={{
            height: 5,
            amplitude: 5,
            speed: 0.5,
            points: 3
          }}/></div>:
          <div style={{backgroundColor:MainColor,height:15,width:300}}/>
        }
        <CardContent>
          {
            props.on?
            <div>
              <h2>{props.title}</h2>        
              <p> {props.description}</p>
            </div>
            :
            <div>
              <h3>{props.title}</h3>        
              <p> {props.description}</p>
            </div>
          }
          
        </CardContent>
        <div align="right" style={{marginTop:-50}}>
           <IconButton  aria-label="settings">
            <CodeIcon style={{color:props.on?'#3F51B5':"#ddd"}}/>
          </IconButton>
        </div>
      </Card>

  );
}