import { Ionicons, Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PremiumScreen from '../screens/PremiumScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList } from '../types';
import AlbumScreen from '../screens/AlbumScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="library" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />      
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function SearchNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search' }}
      />

    <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function LibraryNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerTitle: 'Your Library' }}
      />
    </TabThreeStack.Navigator>
  );  
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function PremiumNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{ headerTitle: 'Premium' }}
      />
    </TabFourStack.Navigator>
  );  
}