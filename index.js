/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Amplify, Auth} from 'aws-amplify';
import awsmobile from './src/aws-exports';
import 'react-native-gesture-handler';

Amplify.configure(awsmobile);
AppRegistry.registerComponent(appName, () => App);
