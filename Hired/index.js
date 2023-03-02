/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Text } from 'react-native';
import { fonts } from './Reausable/Reausable';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.fonts = 'Poppins';

AppRegistry.registerComponent(appName, () => App);
