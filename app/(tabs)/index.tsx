import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>sad</Text>
      <Link href="/details" asChild>
        <Pressable>
          <Text>Details</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
