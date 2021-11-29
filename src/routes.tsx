import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Feather";
import { Book } from "./screens/book";
import { Category } from "./screens/category";
import { Home } from "./screens/home";
import { theme } from "./theme";

export type RootBottomParamList = {
  Home: undefined;
};

export type HomeStackParamList = RootBottomParamList & {
  Category: {
    categoryId: string;
  };
  Book: undefined;
};

const Tab = createBottomTabNavigator<RootBottomParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen name="Book" component={Book} />
    <HomeStack.Screen name="Category" component={Category} />
  </HomeStack.Navigator>
);

export const Router = () => (
  <Tab.Navigator screenOptions={() => ({})}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <Icon name="home" size={30} color={theme.colors.primary} />
        ),
        tabBarShowLabel: false,
      }}
    />
  </Tab.Navigator>
);
