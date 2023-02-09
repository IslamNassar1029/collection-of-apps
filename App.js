import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View } from "react-native";
import Home from "./components/home";
import MovieApp from "./components/movieApp";
import MovieDetail from "./components/movieDetail";
import Camera from "./components/camera";
import MyCalender from "./components/myCalender";
import ImgTaker from "./components/imgTaker";
import MyContacts from "./components/myContacts";
import MyMap from "./components/myMap";
import MyMovement from "./components/myMovement";
import ImageMunipulator from "./components/imageMunipulator";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Page" component={Home} />
        <Stack.Screen name="Movie App" component={MovieApp} />
        <Stack.Screen name="Movie Detail" component={MovieDetail} />
        <Stack.Screen name="camera" component={Camera} />
        <Stack.Screen name="myCalender" component={MyCalender} />
        <Stack.Screen name="ImagePicker" component={ImgTaker} />
        <Stack.Screen name="My Contacts" component={MyContacts} />
        <Stack.Screen name="MyMap" component={MyMap} />
        <Stack.Screen name="MyMovement" component={MyMovement} />
        <Stack.Screen name="ImageMunipulator" component={ImageMunipulator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
