import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-element-dropdown';
import {Calendar} from 'react-native-calendars'
import CTextInput from '../component/cTextInput';
import HeaderButton from '../component/headerButton';
import {Color, FontFamily, FontSize} from '../utils/theme';
import {Images} from '../assets';
import {constantText, serviceArray,hostelArray,DropdownItem} from '../utils/constantText';
import CustomTitle from '../component/customTitle';


const CreatorScreen = () => {
  const navigation = useNavigation<any>();
  const [instagramUrl, setInstagramUrl] = useState<string>('');
  const [hostel, setHostel] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [arrivalDate, setArrivalDate] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>('');
  const renderItem = (item: DropdownItem) => {
    return (
      <View style={styles.item}>
        <Text>{item?.value}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.viewContainer}>
          <HeaderButton
            onPress={()=>navigation.goBack()}
            title={'Creator'}
            titleStyle={styles.title}
            isBack
          />
          <Image source={Images.influencer} style={styles.influencerImage} />
          <CustomTitle title={constantText.INSTAGRAM_TITLE} />
          <CTextInput
            returnKeyType={'none'}
            value={instagramUrl}
            placeholder={constantText.INSTA_PLACEHOLDER}
            placeHolderTextColor={Color.BLACK}
            keyboardType="default"
            onChangeText={(text: string) => {
              setInstagramUrl(text);
            }}
            isShow={false}
          />
          <CustomTitle title={constantText.HOSTEL_NAME} />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            autoScroll={false}
            containerStyle={styles.containerCardStyle}
            data={hostelArray}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select hostel'}
            value={hostel}
            onChange={(item: DropdownItem) => {
              setHostel(item.value); // Update the selected v
            }}
            renderItem={renderItem}
          />
          <CustomTitle title={constantText.EMAIL} />
          <CTextInput
            returnKeyType={'none'}
            value={email}
            placeholder={constantText.EMAIL}
            placeHolderTextColor={Color.BLACK}
            keyboardType="default"
            onChangeText={(text: string) => {
              setEmail(text);
            }}
            isShow={false}
          />
          <CustomTitle title={constantText.DATE_OF_ARRIVAL} />
          <CTextInput
            returnKeyType={'none'}
            value={arrivalDate}
            placeholder={constantText.TRAVELING}
            placeHolderTextColor={Color.BLACK}
            keyboardType="default"
            onChangeText={(text: string) => {
              setArrivalDate(text);
            }}
            isShow={false}
          />
          <CustomTitle title={constantText.SERVICE_OFFER} />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            autoScroll={false}
            containerStyle={styles.containerCardStyle}
            data={serviceArray}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Services'}
            value={service}
            onChange={(item: DropdownItem) => {
              setService(item.value); // Update the selected v
            }}
            renderItem={renderItem}
          />
          <CustomTitle title={constantText.SCREENSHOT} />
          <View style={styles.uploadView}>
            <Text>Upload</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('chat')} style={styles.submitButton}>
          <Text style={styles.submitText}>{constantText.SUBMIT_OFFER}</Text>
        </TouchableOpacity>
        {
          isShow && (
<Calendar
  onDayPress={day => {
    console.log('selected day', day);
  }}
/>
          )
        }
        

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },

  viewContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: FontFamily.INTER_REGULAR,
    fontSize: FontSize.SIZE_16,
    fontWeight: '600',
  },
  influencerImage: {
    width: 167.24,
    height: 193,
    bottom: 15,

    alignSelf: 'center',
  },
  dropdown: {
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
  placeholderStyle: {
    fontFamily: FontFamily.INTER_REGULAR,
    fontSize: FontSize.SIZE_14,
    // lineHeight: 19,
    color: Color.BLACK,
    opacity: 0.5,
    // backgroundColor: 'red',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  containerCardStyle: {
    borderRadius: 10,
    marginTop: 4,
    width: 100,
    backgroundColor: 'red',
    elevation: 3,
  },
  selectedTextStyle: {
    fontSize: FontSize.SIZE_14,
    fontFamily: FontFamily.INTER_REGULAR,
    color: Color.BLACK,
  },
  item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingVertical: 15,
  },
  uploadView: {
    backgroundColor: Color.WHITE,

    fontSize: FontSize.SIZE_14,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontFamily: FontFamily.INTER_REGULAR,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: Color.GREEN,
    height: 52,
    color: Color.BLACK,
    borderStyle: 'dashed',
  },
  submitButton:{


padding:14,
backgroundColor:Color.GREEN,
marginHorizontal:20,
marginVertical:20,
borderRadius:20,
justifyContent:'center'



  },
  submitText:{
    fontFamily:FontFamily.INTER_REGULAR,
fontSize: FontSize.SIZE_16,
fontWeight: '700',
textAlign:'center'


  }
});
