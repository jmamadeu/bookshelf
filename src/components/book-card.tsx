import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../theme";

export function BookCard() {
  return (
    <View>
      <Image
        style={styles.bookImage}
        source={{
          uri: "https://storage.googleapis.com/du-prd/books/images/9781538719725.jpg",
        }}
        accessibilityIgnoresInvertColors
      />
      <Text style={styles.title}>Wonder Women</Text>
      <Text style={styles.author}>Sam Mingas</Text>
      <Icon name="star" color={theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  bookImage: {
    height: 160,
    width: 104,
    backgroundColor: theme.colors.gray3,
    borderRadius: 4,
  },
  title: {
    fontWeight: "bold",
    color: theme.colors.gray1,
    fontSize: 14,
  },
  author: {
    fontSize: 12,
    color: theme.colors.gray2,
  },
});
