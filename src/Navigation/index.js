import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

//routes
import { Routes } from "./Routes";

//screens
import { HomeScreen } from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Text, View } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTab = createMaterialTopTabNavigator();

const Tab1 = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Tab 1</Text>
        </View>
    );
};

const Tab2 = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Tab 2</Text>
        </View>
    );
};

const Tab3 = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Tab 3</Text>
        </View>
    );
};

export const ProfileTabsNavigator = () => {
    return (
        <ProfileTab.Navigator>
            <ProfileTab.Screen name="Tab1" component={Tab1} />
            <ProfileTab.Screen name="Tab2" component={Tab2} />
            <ProfileTab.Screen name="Tab3" component={Tab3} />
        </ProfileTab.Navigator>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName={Routes.Profile} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={Routes.Home} component={HomeScreen} />
            <Drawer.Screen name={Routes.Profile} component={ProfileScreen} />
        </Drawer.Navigator>
    );
};

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }} initialRouteName={"Drawer"}>
                <Stack.Screen name={"Drawer"} component={DrawerNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
