import { StyleSheet, Text, View } from "react-native";
import { BookCategoryType } from "../models/books";
import { theme } from "../theme";

type CategoryType = {
  category: BookCategoryType;
};

export function CategoryCard({ category }: CategoryType) {
  return (
    <View>
      <View style={styles.container}></View>
      <Text style={styles.name}>{category.display_name}</Text>
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
    fontWeight: "700",
    width: 74,
  },
});
