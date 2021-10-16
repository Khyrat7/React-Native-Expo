import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { ForceTouchGestureHandler } from "react-native-gesture-handler";

export default HomePage = (props) => {
  // distructring the navigation property
  const navigation = props.navigation;
  // creating a state for  loading data process
  const [dataLoading, setDataLoading] = useState(true);
  // creating a state for received data
  const [newsData, setNewsData] = useState([]);

  // creating the useEffect hook to fetch data
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tech&apikey=5e3fdb8a5abd493e9830f947162d20a5"
    )
      .then((response) => response.json())
      .then((json) => setNewsData(json.articles))
      .catch((error) => console.log(error))
      .finally(() => setDataLoading(false));
  }, []);

  // creating an item to store a single pice of data
  const storyItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("NewsDetail", { url: item.url })}
      >
        <View style={styles.listings}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.thumbnail} source={{ uri: item.urlToImage }} />
          <Text style={styles.blurb}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      {dataLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={newsData}
          renderItem={storyItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  thumbnail: {
    height: 100,
    width: "98%",
  },
  listings: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    paddingBottom: 10,
    fontWeight: "bold",
  },
  blurb: {
    fontStyle: "italic",
  },
});
