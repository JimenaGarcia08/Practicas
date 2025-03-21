import {StyleSheet, View, Text, TextInput } from "react-native";
import {useState} from "react";

export default function App(){
  const [message, setMessage] = useState("");
  return (
    <View style={StyleSheet.container}>
      <TextInput
      placeholder="Enter message here"
      value={message}
      onChangeText={(text) => setMessage(text)}
      style={StyleSheet.input}
      onSubmitEditing={() => alert(message)}
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
  input: {
    fontSize: 20,
    color: "#228B22",
    fontWeight: "bold"
  },
});
