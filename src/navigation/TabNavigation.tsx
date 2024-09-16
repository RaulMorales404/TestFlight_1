import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reactions from '@screens/reactions/Reactions';
import HomeStackNavigation from './HomeStackNavigation'; 
import { IconHeart, IconHome, IconLike, IconSearch } from '@assets/icons-svgs';
import Search from '@screens/search/Search';
import SearchStackNavigation from './SearchStackNavigation';
import LikesStackNavigation from './LikesStackNavigation';

type RootTabParamsList = {
  Main: undefined;
  NavigationLiks: undefined;
  SearchNavigation: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamsList>();

const CustomTabBarButton = ({ children, onPress, accessibilityState, label,color }: any) => {
  const focused = accessibilityState?.selected;
  return (
    <TouchableOpacity
      style={[{
        top: focused ? Platform.OS==='ios'?'-5%':'-10%' : 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:100,
        marginHorizontal: 20,
      } ,focused?{
        shadowColor: '#ffffff',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 10,

      }:{},]}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: focused ? '#ffffff' : 'transparent',
        }}
      >
        
        {children}
      </View>
     


      {!focused && (
        <Text style={{ color:'#fff',fontSize:13, marginTop: -15 }}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, // Mostrar labels
        tabBarInactiveTintColor:'white',
        tabBarActiveTintColor: '#16a2e9',
        tabBarStyle: {
          backgroundColor: '#16a2e9',
        
          height: 65,
          paddingBottom:40,
          padding:10,
         
            shadowColor: '#ffffff',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 10,
       
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          
          tabBarIcon: ({ color }) => <IconHome color={color} />,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} label="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchNavigation"
        component={SearchStackNavigation}
        options={{
          tabBarLabel: 'Search',
          headerShown: false, 
          tabBarIcon: ({ color }) => <IconSearch color={color} />,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} label="Seah" />
          ),
        }}
      />
      <Tab.Screen
        name="NavigationLiks"
        component={LikesStackNavigation}
        options={{
          tabBarLabel: 'Me gusta',
          headerShown: false, 
          tabBarIcon: ({ color }) => <IconLike color={color} />,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} label="Me gusta" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
 

export default TabNavigation;
