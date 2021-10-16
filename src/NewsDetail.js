import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";

export default NewsDetail = (props) => {
  const { route, navigation } = props;
  const [dataLoading, setDataLoading] = useState(true);
  const [allPostData, setAllPostData] = useState([]);
  const { url } = route.params;
  const selectedPost = allPostData.find((post) => post.url === url);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tech&apikey=5e3fdb8a5abd493e9830f947162d20a5"
    )
      .then((response) => response.json())
      .then((json) => setAllPostData(json.articles))
      .catch((error) => console.log(error))
      .finally(() => setDataLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>GoBack</Text>
      </TouchableOpacity>
      {dataLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Text style={styles.title}>{selectedPost.title}</Text>

          <Image
            style={styles.storyImage}
            source={{ uri: selectedPost.urlToImage }}
          />
          <Text style={styles.blurb}>{selectedPost.description}</Text>
          <Text style={styles.content}>{selectedPost.content}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
  },
  storyImage: {
    height: 300,
    width: "100%",
  },
  blurb: {
    fontSize: 14,
    padding: 20,
    fontStyle: "italic",
  },
  content: {
    flex: 1,
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
