import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 375;

export const scaledPadding = (size) => PixelRatio.roundToNearestPixel(size * scale);
export const scaledMargin = (size) => PixelRatio.roundToNearestPixel(size * scale);
