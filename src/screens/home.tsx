import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
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
import { theme } from "../theme";

export function Home() {
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
              data={[1, 2, 3, 4, 5]}
              style={styles.list}
              renderItem={() => (
                <View style={styles.listItem}>
                  <BookCard />
                </View>
              )}
              keyExtractor={(item) => String(item)}
              horizontal={true}
            />
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.categoryTitle}>Categories</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5]}
              style={styles.list}
              renderItem={() => (
                <View style={styles.listItem}>
                  <CategoryCard />
                </View>
              )}
              keyExtractor={(item) => String(item)}
              horizontal={true}
            />
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.categoryTitle}>The most read of the week</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5]}
              style={styles.list}
              renderItem={() => (
                <View style={styles.listItem}>
                  <BookCard />
                </View>
              )}
              keyExtractor={(item) => String(item)}
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
