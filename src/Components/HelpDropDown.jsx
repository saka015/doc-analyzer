import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import {
  MdFormatLineSpacing,
  MdSpellcheck,
  MdOutlineRateReview,
  MdOutlineCompareArrows,
  MdOutlineRequestPage,
  MdOutlinePostAdd,
  MdNotes,
  MdInsertChartOutlined,
  MdNavigateNext,
  MdCopyAll,
  MdContentPaste,
  MdContentPasteOff,
  MdSelectAll,
    MdOutlineFindReplace,
  MdOutlineTranslate
} from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { BiCheckCircle, BiCut, BiImageAlt } from "react-icons/bi";
import { IoMdCopy, IoIosArrowDropdown } from "react-icons/io";
import { RiUserShared2Line, RiHistoryFill, RiTableLine } from "react-icons/ri";
import { TbMathPi, TbHash, TbPageBreak, TbColumns } from "react-icons/tb";
import { VscTrash, VscRemoteExplorer } from "react-icons/vsc";
import {
  AiOutlineInfoCircle,
  AiFillPrinter,
  AiOutlineLine,
} from "react-icons/ai";
import { GrLanguage, GrEmoji , GrUserSettings } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineListBullet , HiOutlineAcademicCap } from "react-icons/hi2";
import { GrUndo, GrRedo } from "react-icons/gr";
import { CgSmartHomeHeat, CgFormatIndentIncrease } from "react-icons/cg";
import { ImImage, ImPageBreak } from "react-icons/im";
import { RiOmega, RiFormatClear, RiFileSearchLine , RiAlertLine } from "react-icons/ri";
import { BsTypeBold , BsUniversalAccess } from "react-icons/bs";
import { CiTextAlignJustify } from "react-icons/ci";
import { TbFileOrientation , TbMessageReport , TbKeyboard } from "react-icons/tb";
import {BiHelpCircle} from 'react-icons/bi'
import { MdFormatQuote } from "react-icons/md";
import { GoFileSymlinkFile } from "react-icons/go";
import { IoMicOutline } from 'react-icons/io5'
import {IoIosNotificationsOutline} from 'react-icons/io'
import SearchBar from "../utils/SearchBar";
import {GiAerialSignal} from 'react-icons/gi'

export default function HelpDropDown() {
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
        <span className="text-black">Help</span>
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
            <Paper
              sx={{
                borderRadius: 4,
                width: 300,
                maxHeight: 500,
                
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className="rounded-xl"
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                              >
                                  <Box className="border-b-2 mb-2">
                                      <div className="pl-8 pr-8 pt-2  rounded-xl">
                                          <SearchBar />
                                          </div>
                                  </Box>
                                  <Box className="border-b-2 mb-2">
                                      
                                      
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-base">
                        <BiHelpCircle className="mr-2 text-base" /> Help
                      </div>
                      
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <HiOutlineAcademicCap className="mr-2 text-black text-xl" />{" "}
                        Training
                      </div>
                     
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-2 ">
                        <GiAerialSignal className="mr-2 text-xl" /> Updates
                      </div>
                      
                    </MenuItem>
                    
                  </Box>

                  <Box className="border-b-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TbMessageReport className="mr-2 text-base" /> Help Docs improve
                      </div>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-2">
                        <RiAlertLine className="mr-2 text-base" /> Report abuse 
                                          </div>
                                           
                    </MenuItem>
                   
                                  </Box>
                                  <Box className="border-b-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TiDocumentText className="mr-2 text-base" /> Privacy Policy
                      </div>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-2">
                        <TiDocumentText className="mr-2 text-base" /> Terms of Service 
                                          </div>
                                           
                    </MenuItem>
                   
                  </Box>
                  <Box className=" mb-2">
                    <MenuItem
                     
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TbKeyboard className="mr-2 text-base" /> Keyboard shortcuts
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
