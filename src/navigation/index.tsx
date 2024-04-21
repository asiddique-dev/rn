import React from "react";
import { Text } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@screens/home/HomeScreen";
import PostScreen from "@screens/post/PostScreen";
import ChatScreen from "@screens/chat/ChatScreen";
import UserScreen from "@screens/user/UserScreen";
import ActivityScreen from "@screens/activity/ActivityScreen";

/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme, palette } from "@theme/themes";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  // const scheme = useColorScheme();
  // const isDarkMode = scheme === "dark";
  const isDarkMode = false;

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (
    route: any,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route.name) {
      case SCREENS.HOME:
        iconName = "home-outline";
        break;
      case SCREENS.ACTIVITY:
        iconName = "notifications-outline";
        break;
      case SCREENS.POST:
        iconName = "add-circle" ;
        size=40;
        color=palette.primary
        break;
      case SCREENS.CHAT:
        iconName = "chatbubble-outline";
        break;
      case SCREENS.USER:
        iconName ="person-outline";
        break;
    }
    return (
      <Icon
        name={iconName}
        type={IconType.Ionicons}
        size={size}
        color={color}
      />
    );
  };

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) =>
            renderTabIcon(route, color, size),
          tabBarActiveTintColor: palette.primary,
          tabBarInactiveTintColor: palette.black,
          tabBarLabel: ({focused}) => <Text style={{
            fontSize: 10,
            fontWeight: focused ? '800' : '200',
            color: focused ? palette.primary : palette.black
          }}>{route.name}</Text>,
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.ACTIVITY} component={ActivityScreen} />
        <Tab.Screen name={SCREENS.POST} component={PostScreen} />
        <Tab.Screen name={SCREENS.CHAT} component={ChatScreen} />
        <Tab.Screen name={SCREENS.USER} component={UserScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={renderTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
