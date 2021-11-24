/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable , Text } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import NotificationsTab from '../screens/NotificationsTab';
import AnswersTab from '../screens/AnswersTab';
import QuestionView from '../screens/QuestionView';


import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

//icons
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AccountTab from '../screens/AccountTab';
import Profile from '../screens/Profile';
import Login from '../screens/Login';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="QuestionView" component={QuestionView} options={{ title: 'Question' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown : false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Search" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel : false,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({

          title : "Home",

          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" />,
          headerRight: () => (

            <Pressable
              onPress={() => navigation.navigate('Search')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginRight : 5
              })}>
              <AntDesign name="search1" size={24} color="black" />
            </Pressable>
          ),
          
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={AnswersTab}
        options={ ({ navigation }: RootTabScreenProps<'TabTwo'>) => ( {
          title: 'Answer',
          tabBarIcon: ({ color }) => <FontAwesome name="pencil-square-o" size={24} color="black" />,
          headerRight: () => (

            <Pressable
              onPress={() => navigation.navigate('Search')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginRight : 5
              })}>
              <AntDesign name="search1" size={24} color="black" />
            </Pressable>
          ),
          
        })}
      />

      <BottomTab.Screen
        name="Notifications"
        
        component={NotificationsTab}
        options={({ navigation }: RootTabScreenProps<'Notifications'>) => ({

          title : "Notifications",

          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color="black" />,
          headerRight: () => (

            <Pressable
              onPress={() => navigation.navigate('Search')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginRight : 5
              })}>
              <AntDesign name="search1" size={24} color="black" />
            </Pressable>
          ),
          
        })}
      />

      <BottomTab.Screen
        name="Account"
        
        component={AccountTab}
        options={({ navigation }: RootTabScreenProps<'Account'>) => ({

          title : "Account",

          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />,
          headerRight: () => (

            <Pressable
              onPress={() => navigation.navigate('Search')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginRight : 5
              })}>
              <AntDesign name="search1" size={24} color="black" />
            </Pressable>
          ),
          
        })}
      />

    </BottomTab.Navigator>

    
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


function LogoTitle() {
  return (
    <Text>HELLO</Text>
    // <AntDesign name="search1" size={24} color="black" />
  );
}
