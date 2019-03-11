import LoginScreen from '../screens/auth/login/index';
import  RegisterScreen from '../screens/auth/register/index';
import LoginInScreen from '../screens/auth/loginin/index';
import IntroScreen from '../screens/intro/index';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import TabBottom from './tabbottomnaviga';
import HomeScreen from '../screens/home/index';
import ProductScreen from '../screens/home/product/index';
import ProductItemDetail from '../screens/home/product/component/componenpost/postitemdetail';
import ProfileScreen from '../screens/profile/index';




const AuthStack = createStackNavigator(
    {
        LoginIn:{
            screen:LoginInScreen
        }
        ,
        Login:{
            screen:LoginScreen
        },
        Register:{
            screen:RegisterScreen
        },
        
        
    },
    {
        initialRouteName:'LoginIn',
        headerMode: 'none',
    }
);


const IntroStack = createStackNavigator(
    {
       Intro:{
           screen:IntroScreen
       }
        
    },
    {
        initialRouteName:'Intro',
        headerMode: 'none',
    }
);

const RootStack = createAppContainer(createStackNavigator(
    {
        IntroStack:{
            screen:IntroStack,
        },
        AuthStack:{
            screen:AuthStack,
        },
        TabStack:{
            screen:TabBottom
        },
        
    },
    {
        initialRouteName:'IntroStack',
        headerMode:'none'
    }
));

export default RootStack;