import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export function CategoryCard() {
  return (
    <View>
      <View style={styles.container}></View>
      <Text style={styles.name}>Sam Mingas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: 74,
    width: 74,
    borderRadius: 4,
  },
  name: {
    fontSize: 14,
    color: theme.colors.gray1,
    fontWeight: "bold",
  },
});
