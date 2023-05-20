import { BiUserCircle } from 'react-icons/bi';
import Icon from '../assets/Icon.png'
import FileDropDown from '../Components/FileDropDown';
import { AiOutlineStar } from 'react-icons/ai'
import {MdOutlineStarBorderPurple500 , MdOutlineDriveFileMove , MdOutlineComment} from 'react-icons/md'
import {BsCloudCheck} from 'react-icons/bs'
import { Button, IconButton } from '@mui/material';
import { TbLock } from 'react-icons/tb'
import { SiGooglemeet } from 'react-icons/si'
import {RiArrowDropDownFill} from 'react-icons/ri'
import EditDropDown from '../Components/EditDropDown';
import ViewDropDown from '../Components/ViewDropDown';
import InsertDropDown from '../Components/InsertDropDown';
import FormatDropDown from '../Components/FormatDropDown';
import ToolDropDown from '../Components/ToolDropDown';
import ExtensionDropDown from '../Components/ExtensionDropDown';
import HelpDropDown from '../Components/HelpDropDown';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-3 pb-1 border-b bg-slate-50">
      {/* Left */}
      <div className="w-full flex justify-start items-center overflow-x-hidden md:overflow-visible">
        <img className='w-9 h-10 bg-slate-50' src={Icon} alt='icon'/>
              <div className="flex flex-col bg-slate-50">
                  <div className="flex items-center">
                  <input
                    
            maxLength={25}
            type="text"
            className="font-medium text-base px-2 w-40  bg-slate-50 pb-0 pt-0 mt-2"
            name=""
            id=""
            placeholder="Untitled Document"
                      />
                      <MdOutlineStarBorderPurple500 className='text-xl mt-2 ml-1' />
                      <MdOutlineDriveFileMove className='text-xl mt-2 ml-2' />
                      <BsCloudCheck className='text-xl mt-2 ml-2'/>
                      </div>
           
          <div className="flex items-center">
            <button style={{zIndex: '999'}} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <FileDropDown />
            </button>
            <button style={{zIndex: '999'}} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <EditDropDown/>
            </button>
            <button style={{zIndex: '999'}} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <ViewDropDown/>
            </button>
            <button style={{zIndex: '999'}} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
               <InsertDropDown/>
            </button>
            <button style={{zIndex: '999'}} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
               <FormatDropDown/>
            </button>
            <button style={{zIndex: '999'}} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <ToolDropDown/>
            </button>
            <button style={{zIndex: '999'}}  className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <ExtensionDropDown/>
            </button>
            <button style={{zIndex: '999'}}  className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <HelpDropDown/>
            </button>
          </div>
        </div>
      </div>
      {/* Right */}
          <div className="flex items-center flex-shrink-0 pl-3 gap-x-4">
              <Button
               sx={{color:'black', minWidth:0 , padding:0 , margin:0}}><MdOutlineComment className='text-2xl mt-1 mr-5' /></Button>
              <IconButton sx={{minWidth:0 , padding:0 , margin:0}}><SiGooglemeet className='font-thin'/><RiArrowDropDownFill/></IconButton>
              
              <Button  sx={{minWidth:0, color:'black', backgroundColor:'#c2e7ff', borderRadius:10 , textTransform: "none" ,'&:hover': {
      backgroundColor: '#b2ebf2',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#bbdefb',
      },
    }, }}><div className='flex items-center px-3'><TbLock className='text-xl mr-2'/> <p style={{textDecorationColor:'#001d35'}} className='mt-1'>Share</p></div></Button>
        <BiUserCircle style={{zIndex:'99999'}} className='text-4xl' />
      </div>
    </div>
  );
};

export default Navbar;