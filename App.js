import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./src/Home";
import { Platform, SafeAreaView } from "react-native";
// import { AppLoading } from "expo";
import Header from "./src/Header";
import Footer from "./src/Footer";
import { navigationRef } from "./src/RootNavigation";
import NewsDetail from "./src/NewsDetail";
import About from "./src/About";
import Quote from "./src/Quote";
import Catalog from "./src/Catalog";
import CatalogDetail from "./src/CatalogDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      style={{
        paddigngTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
      }}
      ref={navigationRef}
    >
      <SafeAreaView />
      <Stack.Navigator
        initialRouteName="Home"
        options={{
          headerMode: "screen",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            header: () => <Header headerDisplay="Home Page" />,
          }}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            header: () => <Header headerDisplay="News" />,
          }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{
            header: () => <Header headerDisplay="About" />,
          }}
        />

        <Stack.Screen
          name="Quote"
          component={Quote}
          options={{
            header: () => <Header headerDisplay="Quote" />,
          }}
        />

        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            header: () => <Header headerDisplay="Catalog" />,
          }}
        />

        <Stack.Screen
          name="CatalogDetail"
          component={CatalogDetail}
          options={{
            header: () => <Header headerDisplay="Catalog Detail" />,
          }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
