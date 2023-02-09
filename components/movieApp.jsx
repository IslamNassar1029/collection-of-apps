import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MovieItem from "./movieItem";

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

export default function MovieApp({ navigation }) {
  const [moviesList, setMoviesList] = useState([]);
  getMovies(apiUrl);
  function getMovies(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMoviesList(data.results);
      });
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {moviesList.map((movie, index) => {
          return (
            <MovieItem
              navigation={navigation}
              key={movie.id}
              imgLink={imgPath + movie.poster_path}
              mvName={movie.title}
              movieId={movie.id}
              movieOverview={movie.overview}
            />
          );
        })}
      </ScrollView>
    </View>
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
