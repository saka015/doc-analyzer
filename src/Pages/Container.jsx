import { useContext, useEffect, useRef } from "react";
import ToolContext from "../ToolContext";

const TextContainer = ({ width, height, placeholder }) => {
  const [selectedTool, setSelectedTool] = useContext(ToolContext);
  const containerStyles = {
    width: width || "80%",
    height: height || "1000px",
    };
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const newText = textarea.value;
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;

    // Check if the selected tool is 'bold' and text is selected
    if (selectedTool === "bold" && selectionStart !== selectionEnd) {
      const updatedText =
        newText.slice(0, selectionStart) +
        `**${newText.slice(selectionStart, selectionEnd)}**` +
        newText.slice(selectionEnd);
      textarea.value = updatedText;
    }
  }, [selectedTool]);

  useEffect(() => {
    // Call tool function based on the selected tool
    if (selectedTool === "Undo") {
      // Handle undo functionality
      console.log("Undo");
    } else if (selectedTool === "Redo") {
      // Handle redo functionality
      console.log("Redo");
    } else if (selectedTool === "Print") {
      // Handle print functionality
      console.log("Print");
    } else if (selectedTool === "Spelling and grammar check") {
      // Handle spell-check functionality
      console.log("Spell Check");
      }
      else if (selectedTool === "Paint Format") {
      // Handle spell-check functionality
      console.log("Paint Format");
      }
      else if (selectedTool === "Zoom") {
      // Handle spell-check functionality
      console.log("Zoom");
      }
      else if (selectedTool === "Styles") {
      // Handle spell-check functionality
      console.log("Styles");
      }
      else if (selectedTool === "Font") {
      // Handle spell-check functionality
      console.log("Font");
      }
      else if (selectedTool === "decrease-font") {
      // Handle spell-check functionality
      console.log("decrease-font");
      }
      else if (selectedTool === "increase-font") {
      // Handle spell-check functionality
      console.log("increase-font");
      }
    else if (selectedTool === "bold") {
        
      // Handle spell-check functionality
        console.log("bold");
        
      }
      else if (selectedTool === "italic") {
      // Handle spell-check functionality
      console.log("Spell Check");
      }
      else if (selectedTool === "underline") {
      // Handle spell-check functionality
      console.log("underline");
      }
      else if (selectedTool === "font-color") {
      // Handle spell-check functionality
      console.log("font-color");
      }
      else if (selectedTool === "highlight") {
      // Handle spell-check functionality
      console.log("highlight");
    }else if (selectedTool === "add link") {
      // Handle spell-check functionality
      console.log("add link");
      }
      else if (selectedTool === "add comment") {
      // Handle spell-check functionality
      console.log("add comment");
      }
      else if (selectedTool === "add image") {
      // Handle spell-check functionality
      console.log("add image");
      }
      else if (selectedTool === "text-align") {
      // Handle spell-check functionality
      console.log("text-align");
      }
      else if (selectedTool === "line-space") {
      // Handle spell-check functionality
      console.log("line-space");
    } else if (selectedTool === "CheckList") {
        console.log("CheckList")
      }
      else if (selectedTool === "BulletList") {
        console.log("BulletList")
      } else if (selectedTool === "NumberList") {
        console.log("NumberList")
    } else if (selectedTool === "Ident Decrease") {
        console.log("Ident Decrease")
    } else if (selectedTool === "Ident Increase") {
        console.log("Ident Increase")
    } else if (selectedTool === "Format Clear") {
        console.log("Format Clear")
    } 
    // Add more conditions for other tools...
  }, [selectedTool]);

  const handleChange = (e) => {
      const newText = e.target.value;
      console.log(newText)
    // Update text logic
  };

  return (
    <div className="relative " style={containerStyles}>
         <textarea
        ref={textareaRef}
        className="resize-none w-full h-full p-4 outline-none"
        placeholder={placeholder || "Start typing here..."}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextContainer;
