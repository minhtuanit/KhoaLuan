import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screens/home/index';
import ChatScreen from '../screens/chat/index';
import {Icon} from 'native-base';
import React from 'react';
import ProductScreen from '../screens/home/product/index';
import ItemDetail from '../screens/home/product/component/componenpost/postitemdetail';
import ProfileScreen from '../screens/profile/index';

const HomeStack = createStackNavigator(
    {
        Home:{
            screen:HomeScreen,
        },
        Product:{
            screen:ProductScreen,
        },
        ItemDetail:{
            screen:ItemDetail,
        }
    },{
        headerMode: 'none',
    }
);

const ProfileStack = createStackNavigator(
    {
        Profile:{
            screen:ProfileScreen
        }
    },{
        initialRouteName:'Profile',
        headerMode: 'none',
    }
);

const TabBottom = createBottomTabNavigator(
    {
        Home:{
            screen:HomeStack,
            navigationOptions: {
                tabBarLabel: 'Trang Chủ',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="home"  />
                )
            }   
        },
        Chat:{
            screen:ChatScreen,
            navigationOptions: {
                tabBarLabel: 'Đăng Bài',
                tabBarIcon: ({ tintColor }) => (
                  <Icon type='MaterialIcons' name="create"   />
                )
            }   
        },
        Profile:{
            screen:ProfileStack,
            navigationOptions: {
                tabBarLabel: 'Trang cá nhân',
                tabBarIcon: ({ tintColor }) => (
                  <Icon type='FontAwesome' name="user"   />
                )
            } 
        },
        
        
    },{
        initialRouteName:'Home',
        
    }
);




export default TabBottom;