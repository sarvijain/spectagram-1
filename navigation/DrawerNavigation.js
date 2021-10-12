import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator";
import profile from "../screens/profile";

const Drawer= createDrawerNavigator();
const DrawerNavigator =()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={TabNavigator}></Drawer.Screen>
            <Drawer.Screen name="profile" component={profile}></Drawer.Screen>
        
        </Drawer.Navigator>
    )
}
export default DrawerNavigator