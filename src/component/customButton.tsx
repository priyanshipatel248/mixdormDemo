import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color, FontFamily, FontSize} from '../utils/theme';

interface CustomButtonProps {
  style?: ViewStyle;
  buttonCustomStyle?: ViewStyle;
  activeOpacity?: number;
  disabled?: boolean;
  onPress: () => void;
  btnIconName?: string;
  btnIconCustomStyle?: TextStyle;
  title?: string;
  titleStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = props => {
  const {
    buttonCustomStyle,
    activeOpacity,
    disabled,
    onPress,
    btnIconName,
    btnIconCustomStyle,
    titleStyle,
    title,
  } = props;

  return (
    <TouchableOpacity
      style={buttonCustomStyle}
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}>
      <LinearGradient
        colors={
          disabled
            ? [Color.DISABLE_BUTTON, Color.DISABLE_BUTTON]
            : [Color.PINK, Color.PRIMARY]
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.buttonStyle, buttonCustomStyle]}>
        {title && (
          <Text
            style={[
              styles.textStyle,
              {color: disabled ? Color.DISABLE_TEXT : Color.WHITE},
              titleStyle,
            ]}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 67.18,
    marginHorizontal: 20,
    height: 48,
  },
  textStyle: {
    fontFamily: FontFamily.INTER_BOLD,
    fontSize: FontSize.SIZE_16,
  },
  btnIconStyle: {
    fontSize: FontSize.SIZE_18,
    marginRight: 6,
  },
});

export default CustomButton;
