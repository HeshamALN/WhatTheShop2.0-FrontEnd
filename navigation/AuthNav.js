import { createSwitchNavigator } from "react-navigation";

// Components
import Login from "../components/Login/index";
import Signup from "../components/Signup/index";

// Navigators
import LolStack from "./LolStack";

const AuthNav = createSwitchNavigator({
  Login: Login,
  Signup: Signup,
  LolStack: LolStack
});

export default AuthNav;
