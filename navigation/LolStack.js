import { createStackNavigator } from "react-navigation-stack";

// Components
import LolScreen from "../components/Lol";
import ListPage from "../components/ListPage";

const LolStack = createStackNavigator(
  {
    Lol: ListPage
  },
  {
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default LolStack;
