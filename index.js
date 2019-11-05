import { AppRegistry } from 'react-native';
import App from './src/components/Main/index';
import { name as appName } from './app.json';

import Routes from "./src/components/StackNavigator/index.js";

AppRegistry.registerComponent(appName, () => Routes);
