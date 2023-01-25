import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Components/Login";
import Home from "./src/Components/Home";
import Characters from "./src/Components/Characters";
import Houses from "./src/Components/Houses";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(state = "", action) {
  switch (action.type) {
    case "SAVEEMAIL":
      return {
        reduxEmail: action.processedEmail,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="characters" component={Characters} />
          <Stack.Screen name="houses" component={Houses} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainAppWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
