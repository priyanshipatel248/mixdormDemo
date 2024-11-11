import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
  TextStyle,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Color, FontFamily, FontSize} from '../utils/theme';
import {Icons} from '../assets';

interface headerButtonProps {
  onPress: (value: any) => void;
  title: string;
  title2?: string;
  titleStyle?: TextStyle;
  isBack?: boolean;
}
const HeaderButton: React.FC<headerButtonProps> = ({
  onPress,
  title,
  titleStyle,
  title2,
  isBack,
}) => {
  return (
    <View style={styles.container}>
      {isBack && (
        <TouchableOpacity
          style={styles.iconContainer}
          hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}
          onPress={onPress}>
          <Image
            source={Icons.back}
            style={styles.iconBack}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      {/* <View style={styles.titleContainer}> */}
      <Text style={titleStyle}>{title}</Text>
      <Text style={styles.title2}>{title2}</Text>
      {/* </View> */}
    </View>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // height: Platform.OS === 'android' ? 56 : 44,
    alignItems: 'center', // Align items vertically center
    justifyContent: 'center', // Center content horizontally
    paddingVertical: 22,
  },
  iconView: {
    width: 24,
    height: 25,
  },
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.GREY,
  },
  iconBack: {
    width: 18,
    height: 18,
    
    alignSelf: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',

    fontFamily: FontFamily.NUNTION_SANS_EXTRA_BOLD,
    fontSize: FontSize.SIZE_32,

    fontWeight: '800',
  },
  title2: {
    textAlign: 'center',

    color: Color.PRIMARY,

    fontFamily: FontFamily.NUNTION_SANS_EXTRA_BOLD,
    fontSize: FontSize.SIZE_32,

    fontWeight: '800',
  },
});
