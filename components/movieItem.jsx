import { Avatar } from "@react-native-material/core";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MovieItem({
  navigation,
  movieId,
  imgLink,
  mvName,
  movieOverview,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Movie Detail", {
          movieId,
          imgLink,
          mvName,
          movieOverview,
        });
      }}
    >
      <View style={styles.container}>
        <Avatar image={{ uri: imgLink }} />
        <Text style={{ marginTop: 15, marginLeft: 10 }}>{mvName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
});
