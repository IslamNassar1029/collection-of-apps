import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function MovieDetail({ route }) {
  console.log(route.params);
  return (
    <View>
      <View style={styles.container}>
        <Avatar image={{ uri: route.params.imgLink }} />
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            padding: 10,
          }}
        >
          {route.params.mvName}
        </Text>
      </View>
      <Text style={styles.textStyle}>{route.params.movieOverview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
  },
  textStyle: {
    fontSize: 20,
    padding: 10,
  },
});
