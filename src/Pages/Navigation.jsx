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

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-3 pb-1 border-b bg-gray-100">
      {/* Left */}
      <div className="w-full flex justify-start items-center overflow-x-hidden md:overflow-visible">
        <img className='w-9 h-10 bg-gray-100' src={Icon} alt='icon'/>
              <div className="flex flex-col bg-gray-100">
                  <div className="flex items-center">
                  <input
                    
            maxLength={25}
            type="text"
            className="font-medium text-base px-2 w-40  bg-gray-100 pb-0 pt-0 mt-2"
            name=""
            id=""
            placeholder="Untitled Document"
                      />
                      <MdOutlineStarBorderPurple500 className='text-xl mt-2 ml-1' />
                      <MdOutlineDriveFileMove className='text-xl mt-2 ml-2' />
                      <BsCloudCheck className='text-xl mt-2 ml-2'/>
                      </div>
           
          <div className="flex items-center">
            <button style={{zIndex: '999'}} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-gray-100 rounded-md">
              <FileDropDown />
            </button>
            <button className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-gray-100 rounded-md">
              Edit
            </button>
            <button className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-gray-100 rounded-md">
              View
            </button>
            <button className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-gray-100 rounded-md">
              Insert
            </button>
            <button className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-gray-100 rounded-md">
              Format
            </button>
            <button className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-gray-100 rounded-md">
              Tools
            </button>
            <button className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-gray-100 rounded-md">
              Add-ons
            </button>
            <button className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-gray-100 rounded-md">
              Help
            </button>
          </div>
        </div>
      </div>
      {/* Right */}
          <div className="flex items-center flex-shrink-0 pl-3 gap-x-4">
              <Button
               sx={{color:'black', minWidth:0 , padding:0 , margin:0}}><MdOutlineComment className='text-2xl mt-1 mr-5' /></Button>
              <IconButton sx={{minWidth:0 , padding:0 , margin:0}}><SiGooglemeet className='font-thin'/><RiArrowDropDownFill/></IconButton>
              
              <Button  sx={{minWidth:0, color:'black', backgroundColor:'#bbdefb', borderRadius:10 , textTransform: "none" ,'&:hover': {
      backgroundColor: '#b2ebf2',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#bbdefb',
      },
    }, }}><div className='flex items-center px-3'><TbLock className='text-xl mr-2'/> <p className='mt-1'>Share</p></div></Button>
        <BiUserCircle className='text-4xl' />
      </div>
    </div>
  );
};

export default Navbar;