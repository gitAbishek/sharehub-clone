import React, { createContext, useState, ReactNode } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextCreator = createContext<ContextValue>({
  isOpen: false,
  setIsOpen: ()=> {}
});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ContextCreator.Provider value={{isOpen, setIsOpen}}>
      {children}
    </ContextCreator.Provider>
  );
};

export default ContextProvider;
