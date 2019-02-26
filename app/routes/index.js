import LoginScreen from '../screens/auth/login/index';
import  RegisterScreen from '../screens/auth/register/index';
import LoginInScreen from '../screens/auth/loginin/index';
import IntroScreen from '../screens/intro/index';
import HomeScreen from '../screens/home/index';
import {createStackNavigator,createAppContainer} from 'react-navigation';

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
        }
        
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

const HomeStack = createStackNavigator(
    {
        Home:{
            screen:HomeScreen
        }
    },
    {
        initialRouteKey:1,
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
        HomeStack:{
            screen:HomeStack
        },
    },
    {
        initialRouteName:'IntroStack',
        headerMode:'none'
    }
));

export default RootStack;
