import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { BookCard } from "../components/book-card";
import { CategoryCard } from "../components/category-card";
import { useBooksCategory } from "../hooks/useBooksCategory";
import { useBooks } from "../hooks/useBooksOverview";
import { HomeStackParamList, RootBottomParamList } from "../routes";
import { theme } from "../theme";

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootBottomParamList, "Home">,
  NativeStackNavigationProp<HomeStackParamList>
>;

export function Home() {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const { data: categories = [] } = useBooksCategory();
  const { data: books = [] } = useBooks();

  const handleCategoryClick = (category: string) => {
    console.log(category);
    navigate("Category", {
      categoryId: category,
    });
  };

  return (
    <>
      <ExpoStatusBar backgroundColor={theme.colors.white} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.logo}>Bookshelf</Text>
            <Image
              style={styles.image}
              source={require("../../assets/images/avatar.png")}
              accessibilityIgnoresInvertColors
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Which book would you like to read"
            />
            <Icon name="search" style={styles.icon} />
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.categoryTitle}>For you</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={books}
              extraData={books}
              style={styles.list}
              renderItem={(item) => (
                <View style={styles.listItem}>
                  <BookCard book={item.item} />
                </View>
              )}
              keyExtractor={(item) => String(item.book_uri)}
              horizontal={true}
            />
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.categoryTitle}>Categories</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={categories}
              style={styles.list}
              renderItem={(item) => (
                <Pressable
                  style={styles.listItem}
                  onPress={() =>
                    handleCategoryClick(item.item.list_name_encoded)
                  }
                >
                  <CategoryCard category={item.item} />
                </Pressable>
              )}
              extraData={categories}
              keyExtractor={(item) => String(item.list_name_encoded)}
              horizontal={true}
            />
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.categoryTitle}>The most read of the week</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={books.slice().reverse()}
              style={styles.list}
              renderItem={(item) => (
                <View style={styles.listItem}>
                  <BookCard book={item.item} />
                </View>
              )}
              keyExtractor={(index) => String(index)}
              horizontal={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  headerContainer: {
    marginTop: (StatusBar.currentHeight || 0) + 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  logo: {
    color: theme.colors.gray1,
    fontWeight: "bold",
    fontSize: 24,
  },
  image: {
    width: 34,
    height: 34,
  },
  inputContainer: {
    borderColor: theme.colors.border,
    borderWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  input: {
    height: 50,
    fontSize: 14,
  },
  icon: {
    color: theme.colors.gray3,
    fontSize: 15,
  },
  listContainer: {
    marginTop: 30,
    marginLeft: 10,
  },
  categoryTitle: {
    fontSize: 18,
    color: theme.colors.gray1,
    fontWeight: "bold",
  },
  list: {
    marginTop: 16,
  },
  listItem: {
    marginRight: 10,
  },
});
