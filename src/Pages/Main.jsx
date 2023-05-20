import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { GrUndo, GrRedo } from 'react-icons/gr';
import { AiOutlinePrinter, AiOutlineFontColors } from 'react-icons/ai';
import { MdOutlineSpellcheck, MdChecklist, MdFormatListBulleted } from 'react-icons/md';
import { TfiPaintRoller } from 'react-icons/tfi';
import { HiOutlineMinusSmall } from 'react-icons/hi2';
import { IoIosAdd } from 'react-icons/io';
import { VscBold } from 'react-icons/vsc';
import { BsTypeItalic, BsTypeUnderline, BsListOl } from 'react-icons/bs';
import { BiHighlight, BiCommentAdd, BiImageAlt } from 'react-icons/bi';
import { CgFormatIndentDecrease, CgFormatIndentIncrease } from 'react-icons/cg';
import { RxDividerVertical } from 'react-icons/rx';
import { RiFormatClear } from 'react-icons/ri';
import { BsLink } from 'react-icons/bs';
import PositionedMenu from '../utils/DropDownButton';
import TextDropDown from '../utils/TextDropDown';
import FontDropDown from '../utils/FontDropdown';
import AlignDropDown from '../utils/AlignDropDown';
import LineSpacing from '../utils/LineSpacing';
import CheckList from '../utils/CheckList';
import BulletList from '../utils/BulletListMenu';
import NumberList from '../utils/NumberedList';
import EditButton from '../utils/EditingButton';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import TextContainer from './Container';
import Navbar from './Navigation';
import { rgbToHex } from '@material-ui/core';


const FontSizer = () => {
  const selectedText = window.getSelection().toString();
  const textSize = selectedText.length;
  return (
    <div className='flex'>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <HiOutlineMinusSmall />
      </IconButton>
      <div className='text-black mt-2  h-[24px] mb-2 box-border border-2 border-black rounded-md ... '>
        <p className='ml-3 mr-3 mb-3'>{textSize}</p>
      </div>
      <IconButton sx={{ padding: 0.5, margin: 0 }} className='pr-1 ... '>
        <IoIosAdd />
      </IconButton>
      <RxDividerVertical className='text-3xl mt-1 text-gray-300' />
    </div>
  );
};

const StyeComponent = () => {
  return (
    <div className='flex space-x-0 '>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <VscBold className='text-xl ' />
      </IconButton>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <BsTypeItalic className='text-xl' />
      </IconButton>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <BsTypeUnderline className='text-xl' />
      </IconButton>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <AiOutlineFontColors className='text-xl' />
      </IconButton>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <BiHighlight className='text-xl' />
      </IconButton>
      <RxDividerVertical className='text-3xl mt-1 text-gray-300' />
    </div>
  );
};

const FeatureComponent = () => {
  return (
    <div className='flex'>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <BsLink className='text-xl' />
      </IconButton>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <BiCommentAdd className='text-xl' />
      </IconButton>
      <IconButton sx={{ padding: 0.5, margin: 0 }}>
        <BiImageAlt className='text-xl' />
      </IconButton>
      <RxDividerVertical className='text-3xl mt-1 text-gray-300' />
    </div>
  );
};

const MainToolBAr = () => {
  const [isUp, setIsUp] = useState(false);

  const togglePosition = () => {
    setIsUp(!isUp);
  };

  const toolIcons = [
    { icon: <GrUndo className='text-xl' />, tooltip: 'Undo' },
    { icon: <GrRedo className='text-xl' />, tooltip: 'Redo' },
    { icon: <AiOutlinePrinter className='text-xl' />, tooltip: 'Print' },
    { icon: <MdOutlineSpellcheck className='text-xl' />, tooltip: 'Spelling and grammar check' },
    { icon: <TfiPaintRoller className='text-xl' />, tooltip: 'Paint Format' },
    { icon: <PositionedMenu />, tooltip: 'Zoom' },
    { icon: <TextDropDown />, tooltip: 'Styles' },
    { icon: <FontDropDown />, tooltip: 'Font' },
    { icon: <FontSizer />, tooltip: 'font size' },
    { icon: <StyeComponent />, tooltip: 'style' },
    { icon: <FeatureComponent />, tooltip: 'Feature' },
    { icon: <AlignDropDown />, tooltip: 'Align and ident' },
    { icon: <LineSpacing />, tooltip: 'Paragraph and Line Spacing' },
    {
      icon: (
        <div className='flex'>
          <Button
            id='composition-button'
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            sx={{ minWidth: 0, margin: 0, padding: 0, color: 'black' }}
          >
            <MdChecklist sx={{ padding: 0, margin: 0 }} className='text-xl ml-2 mt-1' />
          </Button>{' '}
          <CheckList />
        </div>
      ),
      tooltip: 'CheckList',
    },
    {
      icon: (
        <div className='flex'>
          <Button
            id='composition-button'
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            sx={{ minWidth: 0, margin: 0, padding: 0, color: 'black' }}
          >
            <MdFormatListBulleted sx={{ padding: 0, margin: 0 }} className='text-xl ml-1 mt-1 ' />
          </Button>{' '}
          <BulletList />
        </div>
      ),
      tooltip: 'BulletList',
    },
    {
      icon: (
        <div className='flex'>
          <Button
            id='composition-button'
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            sx={{ minWidth: 0, margin: 0, padding: 0, color: 'black' }}
          >
            <BsListOl sx={{ padding: 0, margin: 0 }} className='text-xl ml-1 mt-1' />
          </Button>{' '}
          <NumberList />
        </div>
      ),
      tooltip: 'NumberList',
    },
    {
      icon: <IconButton sx={{ minWidth: 0, padding: 0 }}><CgFormatIndentDecrease className='text-2xl mt-1' /></IconButton>,
      tooltip: 'Ident Decrease',
    },
    {
      icon: <IconButton sx={{ minWidth: 0, padding: 0 }}><CgFormatIndentIncrease className='text-2xl mt-1' /></IconButton>,
      tooltip: 'Ident Increase',
    },
    {
      icon: <IconButton sx={{ minWidth: 0, padding: 0 }}><RiFormatClear className='text-2xl mt-1' /></IconButton>,
      tooltip: 'Format Clear',
    },
    { icon: <EditButton />, tooltip: 'edit button' },
  ];

  return (
    <>
      {!isUp && <Navbar />}
      <div style={{backgroundColor:'#edf2fa'}} className={`flex items-center  space-x-0 h-[45px] rounded-2xl mr-4 ml-4 ${isUp ? 'mt-1' : 'mt-0'} ${isUp ? 'fixed top-0 w-full z-10' : ''}`}>
        {toolIcons.map((tool, index) => (
          index >= 5 ? (
            index === 19 ? (
              <div className='flex justify-end' key={index} style={{ zIndex: '100' }}>
                {tool.icon}
              </div>
            ) : (
              <div key={index} style={{ zIndex: '100' }}>
                {tool.icon}
              </div>
            )
          ) : (
            <IconButton
              sx={{ padding: 0.5, margin: 0 }}
              key={index}
              className='rounded-full hover:bg-gray-200 w-[35px]'
              title={tool.tooltip}
              onClick={() => tool.func}
            >
              {tool.icon}
            </IconButton>
          ))
        )}
        <RxDividerVertical className='text-3xl mt-1 text-right text-gray-300' />
        <div onClick={togglePosition} className='ml-auto cursor-pointer text-right'>
          {isUp ? <MdKeyboardArrowDown className='text-xl' /> : <MdKeyboardArrowUp className='text-xl' />}
        </div>
      </div>
      <div className='mt-8 flex justify-center' style={{ position: 'relative', zIndex: '1' }}>
        <TextContainer width='800px' height='800px' placeholder='Type something...' />
      </div>
    </>
  );
};

export default MainToolBAr;
