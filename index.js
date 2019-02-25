/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './app/screens/home/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);
