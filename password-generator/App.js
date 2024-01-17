import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routers";

export default function App(){
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}