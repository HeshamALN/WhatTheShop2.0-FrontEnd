import { createStackNavigator } from "react-navigation-stack";

// Components
import LolScreen from "../components/Lol";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LolStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    Lol: LolScreen
  },
  {
    defaultNavigationOptions: {
      title: "Login"
    }
  }
);

export default LolStack;
