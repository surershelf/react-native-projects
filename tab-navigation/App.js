import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CASA TELA" component={HomeScreen} />
        <Tab.Screen name="CONFIGURAÇÕES" component={ConfigScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "arial",
    fontSize: 20,
  },
  text: {
    textAlign: "center",
    color: "black",
    fontFamily: "arial",
    fontSize: 20,
  },
});
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>
        CASINHA TELA (TRADUÇÃO BR) SEM SOBERANIA DOS EUA🤬🤬
      </Text>
    </View>
  );
}
function ConfigScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>CONFIGURAÇÕES ✅✅✅</Text>
    </View>
  );
}
