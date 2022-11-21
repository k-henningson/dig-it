import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider style={styles.container}>
      <StatusBar style="auto" />
      <Button>Dig it!</Button>
    </NativeBaseProvider>
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
