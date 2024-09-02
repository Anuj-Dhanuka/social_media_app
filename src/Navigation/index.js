import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { LogBox } from 'react-native';

//routes
import {Routes} from './Routes';

//screens
import {HomeScreen} from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileTabTitle from '../screens/ProfileScreen/components/ProfileTabTitle';
import ProfileTabContent from '../screens/ProfileScreen/components/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTab = createMaterialTopTabNavigator();

export const ProfileTabsNavigator = () => {
  return (
    <ProfileTab.Navigator screenOptions={{
        tabBarIndicatorStyle: {
            backgroundColor: "transparent"
        },
        tabBarStyle: {
            zIndex: 0,
            elevation: 0
        }
    }}>
      <ProfileTab.Screen
        name="Tab1"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => <ProfileTabTitle isFocused={focused} title="Photos" />,
        }}
      />
      <ProfileTab.Screen
        name="Tab2"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => <ProfileTabTitle isFocused={focused} title="Videos" />,
        }}
      />
      <ProfileTab.Screen
        name="Tab3"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => <ProfileTabTitle isFocused={focused} title="Saved" />,
        }}
      />
    </ProfileTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={HomeScreen} />
      <Drawer.Screen name={Routes.Profile} component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: () => null, headerShown: false}}
        initialRouteName={'Drawer'}>
        <Stack.Screen name={'Drawer'} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
