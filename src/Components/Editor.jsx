import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    console.log(rawContentState); // You can save or handle the content state here
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TextEditor;
