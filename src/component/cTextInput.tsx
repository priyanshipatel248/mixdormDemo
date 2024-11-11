import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Appearance,
  StyleSheet,
} from 'react-native';

import {Color, FontFamily, FontSize} from '../utils/theme';
interface CTextInputProps {
  value: string;
  keyboardType?: string;
  returnKeyType?: string;
  returnKeyLabel?: string;
  placeholder?: string;
  placeHolderTextColor?: string;
  secureTextEntry?: boolean;
  textInputStyle?: object;
  textInputContainer?: any;
  onSubmitEditing?: () => void;
  isPassword?: boolean;
  isShow?: boolean;
  onClickOpen?: () => void;
  // style?: object;
  maxLength?: number;
  ref?: any;
  onChangeText: (text: string) => void;
  multiline?: any;
  numberOfLines?: any;
  editable?: boolean;
  isCalender?: boolean;
  onPressRightTick: () => void;
  eyeIconStyle?: any;
}
const CTextInput: React.FC<CTextInputProps> = ({
  value,
  keyboardType,
  returnKeyType,
  returnKeyLabel,
  placeholder,
  placeHolderTextColor,
  secureTextEntry,
  textInputStyle,
  onChangeText,
  onSubmitEditing,
  isPassword,
  isShow,
  onClickOpen,
  maxLength,
  ref,
  textInputContainer,
  multiline,
  numberOfLines,
  editable,
  isCalender,
  onPressRightTick,
  eyeIconStyle,
}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <View style={textInputContainer}>
      <TextInput
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        value={value}
        placeholderTextColor={Color.BLACK}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[textInputStyle, style.textInputStyle]}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
        autoCapitalize="none"
        editable={editable}
      />
      {isPassword && (
        <TouchableOpacity onPress={onClickOpen} style={style.btnIconPassword}>
          {/* <Image
            source={!isShow ? Images.open_eye : Images.close_eye}
            style={style.eyeIcon}
            resizeMode="contain"
          ></Image> */}
        </TouchableOpacity>
      )}
      {isCalender && (
        <TouchableOpacity
          onPress={onPressRightTick}
          style={style.btnIconPassword}>
          {/* <Image
           source={Icons.search_icon}
           style={eyeIconStyle}
           resizeMode="contain"
         ></Image> */}
        </TouchableOpacity>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  textInputStyle: {
    width: '100%',

    backgroundColor: Color.WHITE,
    fontSize: FontSize.SIZE_14,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontFamily: FontFamily.INTER_REGULAR,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.GREY,
    height: 52,
    color: Color.BLACK,
  },
  text: {
    color: Color.BLACK,
    paddingLeft: Platform.OS === 'ios' ? 10 : 20,
    textAlignVertical: 'center',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginEnd: Platform.OS === 'ios' ? null : 10,
  },
  eyeIcon: {
    width: 16,
    height: 16,
  },
  btnIconPassword: {
    position: 'absolute',
    paddingVertical: 16,
    paddingRight: 14,
    paddingLeft: 16,
    top: 0,
    right: 0,
  },
});
export default CTextInput;
