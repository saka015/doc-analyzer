import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { MdOutlineMail, MdOutlineDriveFileRenameOutline , MdCopyAll , MdContentPaste , MdContentPasteOff ,MdSelectAll , MdOutlineFindReplace } from "react-icons/md";
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

export default function EditDropDown() {
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
        <span className="text-black">Edit</span>
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
                        <GrUndo className="mr-2" /> Undo
                      </div>
                      <span className="text-sm ml-auto text-gray-500">Ctrl+Z</span>
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <GrRedo className="mr-2" /> Redo
                      </div>
                      <span className="text-sm ml-auto text-gray-500 mb-3">Ctrl+Y</span>
                    </MenuItem>
                    
                                  </Box>
                                  <Box className="border-b-2 mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <BiCut className="mr-2" /> Cut
                      </div>
                      <span className="text-sm ml-auto text-gray-500">Ctrl+X</span>
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdCopyAll className="mr-2" /> Copy
                      </div>
                      <span className="text-sm ml-auto text-gray-500 ">Ctrl+C</span>
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdContentPaste className="mr-2" /> Paste
                      </div>
                      <span className="text-sm ml-auto text-gray-500 ">Ctrl+V</span>
                                      </MenuItem>
                                       <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-3">
                        <MdContentPasteOff className="mr-2" /> Paste without formatting
                      </div>
                      <span className="text-sm ml-auto text-gray-500 mb-3  ">Ctrl+Shift+V</span>
                                      </MenuItem>
                                      
                    
                                  </Box>
                                  <Box className="border-b-2 mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdSelectAll className="mr-2" /> Select all
                      </div>
                      <span className="text-sm ml-auto text-gray-500">Ctrl+A</span>
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-3">
                        <VscTrash className="mr-2 " /> Delete
                      </div>
                      
                                      </MenuItem>
                                     
                                      
                    
                                  </Box>
                                  <Box className="mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlineFindReplace className="mr-2" /> Find and replace
                      </div>
                      <span className="text-sm ml-auto text-gray-500">Ctrl+H</span>
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
