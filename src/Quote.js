import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default Quote = (props) => {
  const { route } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [submited, setSubmited] = useState(false);
  //   const { model } = route.params;
  //   const { modelNumber } = route.params;

  useEffect(() => {
    console.log(route);
    // if (model !== "Footer") {
    //   const newQuote = `${model} model#: ${modelNumber}`;
    //   setMessage(newQuote);
    // } else {
    //   setMessage("");
    // }
  });

  const postMessage = () => {
    if (!name | !email | !message) {
      setError(true);
    } else {
      setError(false);
      setSubmited(true);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {error ? (
          <Text style={styles.status}>
            You didn't enter a Name, Email, or message
          </Text>
        ) : (
          <Text style={styles.status}>
            Please enter the requested information
          </Text>
        )}
        {submited ? (
          <Text>
            name: {name} Email:{email}
          </Text>
        ) : (
          <Text style={styles.req}> * required</Text>
        )}

        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />

        <Text style={styles.label}>Message *</Text>
        <TextInput
          style={styles.multi}
          onChangeText={(text) => setMessage(text)}
          value={message}
          multiline
          numberOfLines={6}
          placeholder="Please type the message here"
        />

        <TouchableOpacity style={styles.button} onPress={() => postMessage()}>
          <Text>Submit Quote</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 26,
    width: 250,
  },
  label: {
    fontSize: 18,
    paddingTop: 20,
  },
  req: {
    paddingTop: 10,
    fontStyle: "italic",
  },
  multi: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 16,
    width: 300,
    height: 40,
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 10,
  },
  status: {
    paddingTop: 10,
    paddingBottom: 15,
  },
});
