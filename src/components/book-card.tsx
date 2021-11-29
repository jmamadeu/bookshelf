import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { BookProperties } from "../models/books";
import { theme } from "../theme";

type BookType = {
  book: BookProperties;
};

export function BookCard({ book }: BookType) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bookImage}
        source={{
          uri: book?.book_image,
        }}
        accessibilityIgnoresInvertColors
      />
      <Text style={styles.title}>{book?.title}</Text>
      <Text style={styles.author}>{book?.author}</Text>
      <Icon name="star" color={theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
    width: 104,
  },
  author: {
    fontSize: 12,
    color: theme.colors.gray2,
    width: 104,
  },
});
