import { createAppContainer } from "react-navigation";
import LolStack from "./LolStack";
import AuthNav from "./AuthNav";

const AppContainer = createAppContainer(LolStack);

export default AppContainer;
