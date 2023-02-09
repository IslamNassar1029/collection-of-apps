import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#002764" style="light" />
      <Text style={styles.textStyle}>
        Choose The App that You want to go to
      </Text>

      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go To Movie App"
          onPress={() => {
            navigation.navigate("Movie App");
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go To Camera App"
          onPress={() => {
            navigation.navigate("camera");
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go To Calender App"
          onPress={() => {
            navigation.navigate("myCalender");
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go To Image Picker App"
          onPress={() => {
            navigation.navigate("ImagePicker");
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go To My Contacts App"
          onPress={() => {
            navigation.navigate("My Contacts");
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go To  MyMap App"
          onPress={() => {
            navigation.navigate("MyMap");
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go To  My Movement App"
          onPress={() => {
            navigation.navigate("MyMovement");
          }}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go To  ImageMunipulator App"
          onPress={() => {
            navigation.navigate("ImageMunipulator");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    marginVertical: 25,
  },
});
