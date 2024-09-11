import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reactions from '@screens/reactions/Reactions';
import HomeStackNavigation from './StackNavigation'; 
import { IconHeart, IconHome, IconSearch } from '@assets/icons-svgs';

type RootTabParamsList = {
  Main: undefined;
  Reactions: undefined;
  Search: undefined;
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
      } ,focused?{...styles.shadow}:{},]}
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
          ...styles.shadow,
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
        name="Search"
        component={Reactions}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => <IconSearch color={color} />,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} label="Search" />
          ),
        }}
      />
      <Tab.Screen
        name="Reactions"
        component={Reactions}
        options={{
          tabBarLabel: 'Reactions',
          tabBarIcon: ({ color }) => <IconHeart color={color} />,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} label="Reactions" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

export default TabNavigation;
