import { useContext, useEffect, useRef, useState } from "react";
import ToolContext from "../ToolContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useOnClickOutside } from './hooks/useOnClickOutside';

const TextContainer = ({ width, height, placeholder }) => {
  const [selectedTool, setSelectedTool] = useContext(ToolContext);
  const [content, setContent] = useState("");
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [savedSelection, setSavedSelection] = useState(null);

  const ref = useRef();
  useOnClickOutside(ref, () => {
    setShowColorPalette(false);
    const quill = quillRef.current.getEditor();
    if(savedSelection) {
      quill.setSelection(savedSelection);
    }
  });
  const applyTextColor = (color) => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      quill.format("color", color);
    }
  };
  
  const ColorPalette = () => (
    <div ref={ref} style={{position: 'absolute', top: '40px', right: '10px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '10px'}}>
      <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: selectedColor}} />
      <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
    </div>
  );
  const containerStyles = {
    width: width || "80%",
    height: height || "1000px",
  };
  const quillRef = useRef(null);

  useEffect(() => {
    console.log("tool : ", selectedTool);
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
    } else if (selectedTool === "Paint Format") {
      // Handle spell-check functionality
      console.log("Paint Format");
    } else if (selectedTool === "Zoom") {
      // Handle spell-check functionality
      console.log("Zoom");
    } else if (selectedTool === "Styles") {
      // Handle spell-check functionality
      console.log("Styles");
    } else if (selectedTool === "Font") {
      // Handle spell-check functionality
      console.log("Font");
    } else if (selectedTool === "decrease-font") {
      // Handle spell-check functionality
      console.log("decrease-font");
    } else if (selectedTool === "increase-font") {
      // Handle spell-check functionality
      console.log("increase-font");
    } else if (selectedTool === "bold") {
      // Handle spell-check functionality
      console.log("bold");
      applyBoldFormatting();
      setSelectedTool(null);
    } else if (selectedTool === "italic") {
      console.log("italic");
      applyItalicFormatting();
      setSelectedTool(null);
    } else if (selectedTool === "underline") {
      // Handle spell-check functionality
      console.log("underline");
      applyUnderlineFormatting();
      setSelectedTool(null);
    } else if (selectedTool === "font-color") {
      setShowColorPalette(true);
      const quill = quillRef.current.getEditor();
      setSavedSelection(quill.getSelection());
      setSelectedTool(null);
    } 
    else if (selectedTool === "highlight") {
      // Handle spell-check functionality
      console.log("highlight");
    } else if (selectedTool === "add link") {
      // Handle spell-check functionality
      console.log("add link");
    } else if (selectedTool === "add comment") {
      // Handle spell-check functionality
      console.log("add comment");
    } else if (selectedTool === "add image") {
      // Handle spell-check functionality
      console.log("add image");
    } else if (selectedTool === "text-align") {
      // Handle spell-check functionality
      console.log("text-align");
    } else if (selectedTool === "line-space") {
      // Handle spell-check functionality
      console.log("line-space");
    } else if (selectedTool === "CheckList") {
      console.log("CheckList");
    } else if (selectedTool === "BulletList") {
      console.log("BulletList");
    } else if (selectedTool === "NumberList") {
      console.log("NumberList");
    } else if (selectedTool === "Ident Decrease") {
      console.log("Ident Decrease");
    } else if (selectedTool === "Ident Increase") {
      console.log("Ident Increase");
    } else if (selectedTool === "Format Clear") {
      console.log("Format Clear");
    } 
    // Add more conditions for other tools...
  }, [selectedTool]);
   useEffect(() => {
        if (showColorPalette) {
            applyTextColor(selectedColor);
        }
    }, [selectedColor, showColorPalette]);

  const applyBoldFormatting = () => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      const { index, length } = selection;
      const formats = quill.getFormat(index, length);
      let isBold = formats.bold;
      if (isBold === undefined) isBold = false;
      console.log("Before format change:", isBold);
      quill.format("bold", !isBold);
      const formatsAfter = quill.getFormat(index, length);
      const isBoldAfter = formatsAfter.bold;
      console.log("After format change:", isBoldAfter);
    }
  };
  const applyUnderlineFormatting = () => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      const { index, length } = selection;
      const formats = quill.getFormat(index, length);
      let isUnderlined = formats.underline;
      if (isUnderlined === undefined) isUnderlined = false;
      console.log("Before format change:", isUnderlined);
      quill.format("underline", !isUnderlined);
      const formatsAfter = quill.getFormat(index, length);
      const isUnderlinedAfter = formatsAfter.underline;
      console.log("After format change:", isUnderlinedAfter);
    }
  };
  const applyItalicFormatting = () => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();
    if (selection) {
      const { index, length } = selection;
      const formats = quill.getFormat(index, length);
      let isItalic = formats.italic;
      if (isItalic === undefined) isItalic = false;
      console.log("Before format change:", isItalic);
      quill.format("italic", !isItalic);
      const formatsAfter = quill.getFormat(index, length);
      const isItalicAfter = formatsAfter.italic;
      console.log("After format change:", isItalicAfter);
    }
  };

  const handleChange = (value) => {
    setContent(value);
    console.log(value);
    // Update text logic
    };
    
    

  return (
    <div className="relative " style={containerStyles}>
      {showColorPalette && <ColorPalette />}
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={handleChange}
        modules={{
          toolbar: false, // Disable the toolbar
        }}
        placeholder={placeholder || "Start typing here..."}
        style={{ height: "100%", backgroundColor: "white" }}
      />
    </div>
  );
};

export default TextContainer;
