import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Feather";
import { Book } from "./screens/book";
import { Home } from "./screens/home";
import { theme } from "./theme";

type RootBottomParamList = {
  Home: undefined;
};

type HomeStackParamList = RootBottomParamList & {
  Category: undefined;
  Book: undefined;
};

const Tab = createBottomTabNavigator<RootBottomParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Book" component={Book} />
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
