import { useContext } from "react";
import { ContextCreator } from "./context";

export const useContextStore = () => {
  return useContext(ContextCreator);
};
