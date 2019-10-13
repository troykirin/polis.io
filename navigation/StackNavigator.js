import { createStackNavigator } from "react-navigation-stack";
import RantScreen from "../screens/RantScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import TagsScreen from "../screens/TagsScreen";

const StackNavigator = createStackNavigator(
  {
    // // For each screen that you can navigate to, create a new entry like this:
    // Profile: {
    //   // `ProfileScreen` is a React component that will be the main content of the screen.
    //   screen: ProfileScreen,
    //   // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

    //   // Optional: When deep linking or using react-navigation in a web app, this path is used:
    //   path: "people/:name",
    //   // The action and route params are extracted from the path.

    //   // Optional: Override the `navigationOptions` for the screen
    //   navigationOptions: ({ navigation }) => ({
    //
    //   })
    // },

    Links: {
      screen: LinksScreen,

      path: "",

      navigationOptions: ({ navigation }) => ({})
    },

    Login: {
      screen: LoginScreen,

      path: "",

      navigationOptions: ({ navigation }) => ({})
    },

    Rant: {
      screen: RantScreen,

      path: "",

      navigationOptions: ({ navigation }) => ({})
    },

    Settings: {
      screen: SettingsScreen,

      path: "",

      navigationOptions: ({ navigation }) => ({})
    },

    Signup: {
      screen: SignupScreen,

      path: "",

      navigationOptions: ({ navigation }) => ({})
    },

    Tags: {
      screen: TagsScreen,

      path: "",

      navigationOptions: ({ navigation }) => ({})
    }
  },
  { initialRouteName: "Login" }
);

export default StackNavigator;
