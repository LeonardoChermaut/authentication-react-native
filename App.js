import { SafeAreaView, StyleSheet } from "react-native";

import Navigation from "./src/navigation/index";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
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
