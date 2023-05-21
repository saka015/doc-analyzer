// ToolContext.js
import React from "react";

const ToolContext = React.createContext();

export const ToolProvider = ToolContext.Provider;
export const ToolConsumer = ToolContext.Consumer;

export default ToolContext;
