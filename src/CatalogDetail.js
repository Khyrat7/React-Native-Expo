import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import globalCatalog from "./CatalogDB";

export default CatalogDetail = (props) => {
  const { route, navigation } = props;
  const [catalogData, setCatalogData] = useState(globalCatalog);
  const { id } = route.params;
  const selectedProduct = catalogData.find(
    (product) => product.modelNumber === id
  );
  console.log(globalCatalog);
  console.log(id);
  console.log(selectedProduct);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.model}>{selectedProduct.description}</Text>
        <Image style={styles.productImage} source={selectedProduct.image} />
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Quote", {
            model: selectedProduct.model,
            modelNumber: selectedProduct.modelNumber,
          })
        }
      >
        <Text style={styles.buttonText}> Submit Quote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 100,
  },
  button: {
    padding: 20,
  },
  buttonText: {
    fontWeight: "bold",
  },
  model: {
    paddingBottom: 15,
  },
  productImage: {
    height: 250,
    width: "100%",
  },
  description: {
    padding: 10,
  },
});
