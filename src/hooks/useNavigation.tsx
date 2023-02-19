import { useContext } from "react";
import { NavigationContext } from "../context";

export const useNavigation = () => useContext(NavigationContext);
