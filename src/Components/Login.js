import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(false);

  useEffect(() => checkIsValid(), [email, password]);

  const checkIsValid = () => {
    if (email && password && email.includes("@")) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <View style={styles.mainLoginWrapper}>
      <View style={styles.loginWrapper}>
        <View style={styles.loginTextInputWrapper}>
          <Text>Email :</Text>
          <TextInput
            value={email}
            style={styles.loginTextInput}
            onChangeText={(val) => setEmail(val)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.loginTextInputWrapper}>
          <Text>Password :</Text>
          <TextInput
            value={password}
            style={styles.loginTextInput}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={[
            styles.loginButton,
            { backgroundColor: isValid ? "#42EEFC" : "grey" },
          ]}
          disabled={!isValid}
          onPress={() => {
            const processedEmail = email.slice(0,email.indexOf("@"))
            props.dispatch({ type:"SAVEEMAIL",processedEmail})
            props.navigation.navigate("home");
            }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  reduxEmail:state.reduxEmail
})

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  mainLoginWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginWrapper: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 30,
  },
  loginTextInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  loginTextInput: {
    marginLeft: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 5,
    width: 180,
  },
  loginButton: {
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
});
