import React, { createContext, useState } from 'react';

const UndoContext = createContext();

const UndoProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [undoText, setUndoText] = useState('');

  const handleUndo = () => {
    setText(undoText);
  };

  const updateText = (newText) => {
    setUndoText(text);
    setText(newText);
  };

  return (
    <UndoContext.Provider value={{ text, updateText, handleUndo }}>
      {children}
    </UndoContext.Provider>
  );
};

export { UndoContext, UndoProvider };
