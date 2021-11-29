import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { BookCard } from "../components/book-card";
import { useBooksByCategory } from "../hooks/useBooksByCategory";
import { HomeStackParamList } from "../routes";

type ProfileScreenRouteProp = RouteProp<HomeStackParamList, "Category">;

export const Category = () => {
  const { params } = useRoute<ProfileScreenRouteProp>();

  const { data: books = [] } = useBooksByCategory(params.categoryId);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        data={books}
        extraData={books}
        renderItem={(item) => (
          <View style={styles.book}>
            <BookCard book={item.item} />
          </View>
        )}
        keyExtractor={(index) => String(index)}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 10,
  },
  book: {
    height: 230,
    marginRight: 20,
  },
});
