import { createStackNavigator } from "react-navigation-stack";

// Components
import LolScreen from "../components/Lol";

import Login from "../components/Login";
import Signup from "../components/Signup";
import ListPage from "../components/ListPage";

const LolStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    LolScreen: LolScreen,
    Lol: ListPage
  },
  {
    // initialRouteName: "LolScreen",
    defaultNavigationOptions: {
      title: "LolScreen"
    }
  }
);

export default LolStack;
