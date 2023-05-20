import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { MdOutlineMail, MdOutlineDriveFileRenameOutline ,MdOutlineModeEditOutline, MdCopyAll , MdContentPaste , MdContentPasteOff ,MdSelectAll , MdOutlineFindReplace } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { BiFolder, BiCheckCircle , BiCut } from "react-icons/bi";
import { IoMdCopy } from "react-icons/io";
import { RiUserShared2Line, RiHistoryFill } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineInfoCircle, AiFillPrinter } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GrUndo, GrRedo } from 'react-icons/gr'
import { HiCheck } from 'react-icons/hi'
import {BsFullscreen} from 'react-icons/bs'

export default function ViewDropDown() {
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
      <Button
        sx={{ textTransform: "none", minWidth: 1, padding: 0 }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span className="text-black">View</span>
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
            <Paper sx={{ borderRadius: 4, width: 300 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className="rounded-xl"
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <Box className="border-b-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlineModeEditOutline className="mr-2" /> Mode
                      </div>
                      
                                      </MenuItem>
                                      
                    
                                  </Box>
                                  <Box className="border-b-2 mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <HiCheck className="mr-2" /> Show print layout
                      </div>
                     
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <HiCheck className="mr-2" /> Show ruler
                      </div>
                      
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <HiCheck className="mr-2" /> Show outline
                      </div>
                      
                                      </MenuItem>
                                       <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm ml-5">
                         Show equation toolbar
                      </div>
                     
                                      </MenuItem>
                                       <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-3 ml-5">
                         Show non-printing characters
                      </div>
                     
                                      </MenuItem>
                                      
                    
                                  </Box>
                                 
                                  <Box className="mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <BsFullscreen className="mr-2" /> Full Screen
                      </div>
                      
                                      </MenuItem>
                                     
                                      
                    
                  </Box>
                  
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
