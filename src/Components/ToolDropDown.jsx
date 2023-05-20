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
import { HiOutlineListBullet } from "react-icons/hi2";
import { GrUndo, GrRedo } from "react-icons/gr";
import { CgSmartHomeHeat, CgFormatIndentIncrease } from "react-icons/cg";
import { ImImage, ImPageBreak } from "react-icons/im";
import { RiOmega, RiFormatClear, RiFileSearchLine } from "react-icons/ri";
import { BsTypeBold , BsUniversalAccess } from "react-icons/bs";
import { CiTextAlignJustify } from "react-icons/ci";
import { TbFileOrientation } from "react-icons/tb";
import { MdFormatQuote } from "react-icons/md";
import { GoFileSymlinkFile } from "react-icons/go";
import { IoMicOutline } from 'react-icons/io5'
import {IoIosNotificationsOutline} from 'react-icons/io'

export default function ToolDropDown() {
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
        <span className="text-black">Tools</span>
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
                width: 350,
                maxHeight: 500,
                overflowY: "auto",
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
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-base">
                        <MdSpellcheck className="mr-2 text-base" /> Spelling &
                        Grammar
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TiDocumentText className="mr-2 text-black text-xl" />{" "}
                        Word count
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+Shift+C
                      </span>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlineRateReview className="mr-2 text-xl" /> Review
                        suggested & edits
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+Alt+O
                      </span>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlineCompareArrows className="mr-2 text-xl" />{" "}
                        Compare documents
                      </div>
                    </MenuItem>

                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdFormatQuote className="mr-2 text-xl" /> Citations
                      </div>
                      <div className="ml-auto"></div>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <VscRemoteExplorer className="mr-2 text-xl" /> Explore
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+Alt+Shift+I
                      </span>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <GoFileSymlinkFile className="mr-2 text-xl" /> Linked
                        objects
                      </div>
                    </MenuItem>
                    
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <RiFileSearchLine className="mr-2 text-xl" /> Dictionary
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+Shift+Y
                      </span>
                    </MenuItem>
                  </Box>

                  <Box className="border-b-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlineTranslate className="mr-2 text-base" /> Translate document
                      </div>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <IoMicOutline className="mr-2 text-base" /> Voice typing 
                                          </div>
                                           <span className="text-sm ml-auto text-gray-500">
                        Ctrl+Shift+S
                      </span>
                    </MenuItem>
                   
                  </Box>
                  <Box className=" mb-2">
                    <MenuItem
                     
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <IoIosNotificationsOutline className="mr-2 text-base" /> Notification settings
                      </div>
                    
                    </MenuItem>
                    <MenuItem
                      
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <GrUserSettings className="mr-2 text-base" /> Preferences
                      </div>
                     
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <BsUniversalAccess className="mr-2 text-base" /> Accessibility
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
