import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import feed from "../screens/feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator =()=>{
    return(

          <Tab.Navigator 
             screenOptions={({route})=>({
                 tabBarIcon:({focused,color,size})=>{
                 var iconName;
                 if(route.name=== "feed"){
                     iconName=focused?"book":"book-outline"
                 }
                 else if(route.name==="CreatePost"){
                         iconName=focused?"create":"create-outline"
                 } 
                    return <Ionicons name={ iconName }size={size} color={color}/>
             }})}
             tabBarOptions={{
                 activeTintColor:"tomato",
                 inactiveTintcolor:"grey"
             }}
          >
              <Tab.Screen name="feed" component={feed}></Tab.Screen>
              <Tab.Screen name="CreatePost" component={CreatePost}></Tab.Screen>
          </Tab.Navigator>

    )

}
export default BottomTabNavigator