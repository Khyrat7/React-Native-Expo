import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../assets/logo.png";

export default Header = (props) => {
  return (
    <View style={styles.header}>
      <Image source={logo} style={{ width: 35, height: 35 }} />
      <View>
        <Text>{props.headerDisplay}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
