import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Casa">
        <Stack.Screen name="Casa" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontFamily: "arial",
    fontSize: 20,
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>CASAAAAAAAAAAAAAAA TELAAAAAAAAAAAAAAAA</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate("Detalhes", { produtoId: 101 })}
      />
    </View>
  );
}
function DetailsScreen({ route, navigation }) {
  const { produtoId } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.text}> TELLLLAAAAAA DE PRODUTOOOSSSS</Text>
      <Text> ID do produto: {produtoId}</Text>
      <Button
        title="Ir para o perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>PERFILLLLLLLLLLLLLLLLLLLLLL</Text>
    </View>
  );
}
