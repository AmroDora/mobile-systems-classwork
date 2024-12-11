import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={(newValue) => setEmail(newValue)}
      />
      {/* <Text>Email is : {email} </Text> */}

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        placeholder="Password"
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 ? (
        <Text> Password must be more than 5 characters</Text>
      ) : null}
      {/* <Text>Password is : {password} </Text>  */}

      <Button
        style={styles.button}
        title="Submit"
        onPress={handleSubmit}
        
      />
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: "0.7%",
    width: 400,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    backgroundColor: "blue",
    width: 100,
    height: 30,
  },
});
