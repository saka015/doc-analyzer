import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { MdFormatLineSpacing, MdOutlineRequestPage,MdOutlinePostAdd, MdNotes, MdInsertChartOutlined,MdNavigateNext , MdCopyAll , MdContentPaste , MdContentPasteOff ,MdSelectAll , MdOutlineFindReplace } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import {  BiCheckCircle , BiCut , BiImageAlt } from "react-icons/bi";
import { IoMdCopy , IoIosArrowDropdown } from "react-icons/io";
import { RiUserShared2Line, RiHistoryFill , RiTableLine } from "react-icons/ri";
import { TbMathPi , TbHash , TbPageBreak ,  TbColumns } from "react-icons/tb";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineInfoCircle, AiFillPrinter, AiOutlineLine } from "react-icons/ai";
import { GrLanguage ,GrEmoji } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi";
import {HiOutlineListBullet} from 'react-icons/hi2'
import { GrUndo, GrRedo } from 'react-icons/gr'
import {CgSmartHomeHeat , CgFormatIndentIncrease} from 'react-icons/cg'
import { ImImage , ImPageBreak } from 'react-icons/im'
import { RiOmega , RiFormatClear } from 'react-icons/ri'
import { BsTypeBold } from 'react-icons/bs'
import { CiTextAlignJustify } from 'react-icons/ci'
import {TbFileOrientation} from 'react-icons/tb'


export default function FormatDropDown() {
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
        <span className="text-black">Format</span>
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
            <Paper sx={{ borderRadius: 4, width: 350, maxHeight: 500, overflowY: "auto" }}>
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
                      <div className="flex items-center text-base">
                        <BsTypeBold className="mr-2 text-xl" /> Text
                      </div>
                      <MdNavigateNext className="ml-auto"/>
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <CiTextAlignJustify className="mr-2 text-black text-base" /> Paragraph styles
                      </div>
                      <MdNavigateNext className="ml-auto"/>
                                      </MenuItem>
                                       <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <CgFormatIndentIncrease className="mr-2 text-xl" /> Align & Ident
                      </div>
                      <MdNavigateNext className="ml-auto"/>
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdFormatLineSpacing className="mr-2 text-base" /> Line & Pragraph spacing
                      </div>
                      <MdNavigateNext className="ml-auto"/>
                                      </MenuItem>
                                       <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TbColumns className="mr-2 text-xl" /> Columns
                      </div>
                      <div className="ml-auto"></div>
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <HiOutlineListBullet className="mr-2 text-xl" /> Bullets & Numbering
                      </div>
                       <MdNavigateNext className="ml-auto"/>
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      </MenuItem>
                  </Box>
                  
                                  <Box className="border-b-2 mb-2">
                    
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <ImPageBreak className="mr-2 text-base" /> Header and Footer
                                          </div>
                                          
                                      </MenuItem>
                                       <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TbHash className="mr-2 text-base" /> Page Number
                                          </div>
                                         
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TbFileOrientation className="mr-2 text-base" /> Page Orientation
                                          </div>
                                         
                      </MenuItem>
                                  </Box>
                                             <Box className="border-b-2 mb-2">
                    
                                      <MenuItem disabled={true}
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <RiTableLine className="mr-2 text-base" /> Table
                                          </div>
                                          <MdNavigateNext className="ml-auto"/>
                                      </MenuItem>
                                      <MenuItem
                                          disabled={true}
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <BiImageAlt className="mr-2 text-base" /> Image
                                          </div>
                                          <MdNavigateNext className="ml-auto"/>
                                      </MenuItem>
                                      <MenuItem
                                          className="flex justify-between items-center"
                                          disabled={true}
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <AiOutlineLine className="mr-2 text-base" /> Borders & lines
                                          </div>
                                          <MdNavigateNext className="ml-auto"/>
                      </MenuItem>
                                  </Box>
                                  <Box className="mb-2">
                    
                                      <MenuItem 
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <RiFormatClear className="mr-2 text-base" /> Clear Formatting
                                          </div>
                                         <span className="text-sm ml-auto text-gray-500">Ctrl+/</span>
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
