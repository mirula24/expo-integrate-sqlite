import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View , FlatList } from "react-native";
import CardComponents from "./components/CardComponent";
import { SQLiteProvider } from "expo-sqlite";

export default function App() {
  return (
    <FlatList>
      <View style={styles.container}>
        <SQLiteProvider
          databaseName="test.db"
          assetSource={{ assetId: require("./sqlite.db") }}
        >
          <CardComponents />
          <StatusBar style="auto" />
        </SQLiteProvider>
      </View>
    </FlatList>
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
