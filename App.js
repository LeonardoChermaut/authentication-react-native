import { SafeAreaView, StyleSheet, Image } from "react-native";
import ConfirmEmailScreen from "./src/screens/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ForgotPasswordScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f9fbfc",
  },
});

export default App;
