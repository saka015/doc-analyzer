import { createContext, useContext, useState } from 'react';

const UndoContext = createContext();

export const UndoProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [previousText, setPreviousText] = useState('');

  const updateText = (newText) => {
    setPreviousText(text);
    setText(newText);
  };

  const undo = () => {
    setText(previousText);
  };

  return (
    <UndoContext.Provider value={{ text, updateText, undo }}>
      {children}
    </UndoContext.Provider>
  );
};

export const useUndo = () => useContext(UndoContext);
