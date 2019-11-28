import { createStackNavigator } from "react-navigation-stack";

// Components
import LolScreen from "../components/Lol";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LolStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    LolScreen: LolScreen
  },
  {
    // initialRouteName: "LolScreen",
    defaultNavigationOptions: {
      title: "LolScreen"
    }
  }
);

export default LolStack;
