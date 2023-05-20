import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Fab from '@material-ui/core/Fab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MailIcon from '@material-ui/icons/Mail';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DescriptionIcon from '@material-ui/icons/Description';

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: open ? '0' : '-250px',
          height: '100vh',
          width: '60px',
          backgroundColor: '#F3F4F6',
          zIndex: 9999,
          transition: 'right 0.3s',
        }}
      >
        <div style={{ height: '20px' }}></div>
        <List style={{ marginTop: '30px', padding: '10px 0' }}>
          {['Mail', 'Calendar', 'Docs'].map((text, index) => (
            <ListItem button key={text} style={{ marginBottom: '10px' }}>
              <ListItemIcon>
                {index === 0 ? <MailIcon /> : index === 1 ? <CalendarTodayIcon /> : <DescriptionIcon />}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
      <div
        style={{
          marginLeft: open ? '250px' : 0,
          transition: 'margin-left 0.3s',
        }}
      >
        {/* Your main content goes here */}
      </div>
      <Fab
        color="default"
        aria-label="add"
        onClick={toggleDrawer}
        style={{
          position: 'fixed',
          right: open ? '0px' : 0,
          bottom: 20,
          zIndex: 99999999,
          width: '30px',
          height: '30px',
          minWidth: '30px',
          borderRadius: '50% 0 0 50%',
          backgroundColor: open ? '#F7FAFC' : 'transparent',
          transition: 'right 0.3s',
        }}
      >
        {open ? (
          <ArrowForwardIosIcon style={{ color: 'gray', fontSize: '0.8rem' }} />
        ) : (
          <ArrowBackIosIcon style={{ color: 'gray', fontSize: '0.8rem' }} />
        )}
      </Fab>
    </div>
  );
}
