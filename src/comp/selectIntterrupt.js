import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

const HWinterrupt = [
    '타이머', 
    '키보드', 
    'PIC cascading',
    'second serial port',
    'first serial port', 
    '플로피 디스크', 
    '시스템 클록',
    '네트워크 인터페이스',
    'USB포트, 사운드카드',
    'PS/2 마우스',
    'math coprocessor',
    'EIDE 디스크 컨트롤러1',
    'EIDE 디스크 컨트롤러2',
];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: '#ddd',
    color: '#3F51B5',
  },
});


export default function SelectInterrupt(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog open={props.count}>
      <DialogTitle >Select HW Interrupt</DialogTitle>
      <List>
        {HWinterrupt.map((type,i) => (
          <ListItem button onClick={() => {props.setInterrupt(i+32);props.plusCount()}} key={type}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ScreenShareIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={type} />
          </ListItem>
        ))}
      </List>
    </Dialog>
    </div>
  );
}