import {StyleSheet, View, Text, Button } from "react-native";
import {useState} from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.number}>{number}</Text>
      <Button
      title="Change State"
      onPress={() => {
        setNumber(number + 1);
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 20,
    color: "#228B22",
    fontWeight: "bold",
  },
});
