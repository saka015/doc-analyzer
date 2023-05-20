import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

  const handleBackdropClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        color="default"
        aria-label="add"
        onClick={toggleDrawer}
        style={{
          position: 'fixed',
          right: 0,
          bottom: 20,
          zIndex: 2000,
          width: '30px',
          height: '30px',
          minWidth: '30px',
          borderRadius: '50% 0 0 50%',
          backgroundColor: open ? '#F7FAFC' : 'transparent',
        }}
      >
        {open ? (
          <ArrowForwardIosIcon style={{ color: 'gray', fontSize: '0.8rem' }} />
        ) : (
          <ArrowBackIosIcon style={{ color: 'gray', fontSize: '0.8rem' }} />
        )}
      </Fab>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        style={{
          width: '40px',
          marginTop: 20,
          backgroundColor: '#F7FAFC',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: 'transparent' },
            onClick: handleBackdropClick,
          },
        }}
      >
        <div style={{ height: '20px', pointerEvents: 'none' }}></div>
        <List style={{ marginTop: '30px', padding: '10px 0' }}>
          {['Mail', 'Calendar', 'Docs'].map((text, index) => (
            <ListItem button key={text} style={{ marginBottom: '10px' }}>
              <ListItemIcon>
                {index === 0 ? <MailIcon /> : index === 1 ? <CalendarTodayIcon /> : <DescriptionIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
