import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TiDocumentText } from 'react-icons/ti'
import { BiFolder } from 'react-icons/bi'
import { IoMdCopy } from 'react-icons/io'
import {RiUserShared2Line} from 'react-icons/ri'

export default function FileDropDown() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="">
          <Button sx={{textTransform: "none" , minWidth:1 , padding:0}}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
              onClick={handleToggle}
    
      >
        <span className="text-black">
          File 
        </span>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper sx={{borderRadius:4 , width:300}}>
              <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                  className="rounded-xl"
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                              >
                                <Box className="border-b-2">
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText className="mr-2"/> New
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <BiFolder  className="mr-2"/> Open
                                      </MenuItem>
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <IoMdCopy  className="mr-2"/> Make a copy
                                      </MenuItem>
                                  </Box>
                                  <Box className="border-b-2">
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <RiUserShared2Line  className="mr-2"/> Share
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText  className="mr-2"/> Email
                                      </MenuItem>
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText  className="mr-2"s/> Download
                                      </MenuItem>
                                  </Box>
                                   <Box className="border-b-2">
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText/> Rename
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText/> Move to Trash
                                      </MenuItem>
                                      
                                  </Box>
                                  <Box className="border-b-2">
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText/> Version History
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText/> Make available offline
                                      </MenuItem>
                                      
                                  </Box>
                                  <Box>
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText/> Details
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText/> Language
                                      </MenuItem>
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText/> Page Setup
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <TiDocumentText/> Print
                                      </MenuItem>
                                  </Box>
                  
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'transparent'}}
          >
             
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Fit</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
    </div>
  );
}
