import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

const blockA = `A paragraph is a series of sentences that are organized and coherent,
 and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be
 organized into paragraphs. ... One of the most important of these is a topic sentence.`;

const blockB = `Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: 
a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality,
 though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
 A paragraph is defined as “a group of sentences or a single sentence that forms a unit” 
 (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph.
  For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
  Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, 
we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.`;

export default About = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={image1} style={{ width: "100%", height: 300 }} />
        <Text style={styles.heading}>We Are Different</Text>
        <Text style={styles.text}>{blockA}</Text>
        <Image source={image2} style={{ width: "100%", height: 300 }} />
        <Text style={styles.heading}>Leaders in our field</Text>
        <Text style={styles.text}>{blockB}</Text>
        <Image source={image3} style={{ width: "100%", height: 300 }} />
        <Text style={styles.heading}>We are Experts</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    paddingTop: 5,
  },
  text: {
    fontStyle: "italic",
  },
});
