// gesture-handler.js
import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  require('react-native-gesture-handler');
}