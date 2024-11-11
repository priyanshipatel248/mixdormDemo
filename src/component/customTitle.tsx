import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontFamily, FontSize} from '../utils/theme';

interface customTitleProps {
  title: string;
}
const CustomTitle: React.FC<customTitleProps> = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: FontFamily.INTER_BLACK,
    fontSize: FontSize.SIZE_16,
    fontWeight: '600',
    marginVertical:7
  },
});
