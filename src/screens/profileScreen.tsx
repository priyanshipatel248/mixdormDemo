import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Circle';

import HeaderButton from '../component/headerButton';
import {Color, FontFamily, FontSize} from '../utils/theme';
import {Icons, Images} from '../assets';
import {constantText, data} from '../utils/constantText';
const {width} = Dimensions.get('window');
const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderButton
        onPress={function (value: any): void {
          throw new Error('Function not implemented.');
        }}
        title={'Mix'}
        titleStyle={styles.titleText}
        title2={'Dorm'}
      />
      <View style={styles.primaryContainer}>
        <View style={styles.profileProgressContainer}>
          <ProgressBar
            size={130}
            progress={0.7}
            thickness={2}
            color="#F76C6A"
            borderWidth={0}
            showsText={false}
          />

          <View style={styles.profileContainer}>
            <Image source={Images.profile} style={styles.profileImage} />
          </View>
          <Image source={Icons.edit_pencil} style={styles.editIcon} />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.completeButton}>
          <LinearGradient
            colors={[Color.PRIMARY, Color.PINK]}
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.completeButton}>
            <Text style={styles.completeText}>{constantText.COMPLETE}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.nameText}>Rechel Sah</Text>
        <Text style={styles.txt}>Doctor 28 UK</Text>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.viewIcon}>
            <LinearGradient
              colors={[Color.PRIMARY, Color.PINK]}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.viewIcon}>
              <Image
                source={Icons.settings}
                style={styles.settingIcon}
                resizeMode="contain"
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editViewIcon}>
            <LinearGradient
              colors={[Color.PRIMARY, Color.PINK]}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.editViewIcon}>
              <Image
                source={Icons.pencil}
                style={styles.pencilIcon}
                resizeMode="contain"
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewIcon}>
            <LinearGradient
              colors={[Color.PRIMARY, Color.PINK]}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.viewIcon}>
              <Image
                source={Icons.safety}
                style={styles.settingIcon}
                resizeMode="contain"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <ImageBackground
        source={Images.chatBackground}
        resizeMode="contain"
        style={styles.imageBackground}>
        <View style={styles.subHeaderContainer}>
          <Image
            source={Icons.flame}
            style={styles.flameIcon}
            resizeMode="contain"
          />
          <Text style={styles.mixMateText}>MixMate Platinum</Text>
        </View>

        <View style={styles.packageItem}>
          <View style={styles.headerItem}>
            <Text style={styles.headerText}>{constantText.INCLUDE}</Text>
            <Text style={styles.headerText}>{constantText.FREE}</Text>
            <Text style={styles.headerText}>{constantText.GOLD}</Text>
          </View>
          {data.map(item => {
            return (
              <View style={styles.headerItem}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}></Text>
                <Image source={Icons.right_click} style={styles.rightClick} />
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('creator');
          }}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },

  primaryContainer: {
    flex: 0.7,
    alignItems: 'center',
  },
  secondaryContainer: {
    flex: 0.5,
  },
  profileProgressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  gradientCircle: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: (width - 40) * 0.6, // Adjust based on progress (e.g., 30%)
    height: 4,
    borderRadius: 2,
  },
  profileContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 115,
    height: 115,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    top: 15,

    right: 8,
    height: 29,
    width: 29,
  },
  completeButton: {
    height: 30,
    borderRadius: 14,
    top: -8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  completeText: {
    fontFamily: FontFamily.NUNTION_SANS_MEDIUM,
    fontSize: 10,
    fontWeight: '700',
    color: Color.WHITE,
    paddingHorizontal: 15,

    textAlign: 'center',
  },
  nameText: {
    fontFamily: FontFamily.INTER_BLACK,
    fontSize: FontSize.SIZE_22,
    fontWeight: '700',
    color: Color.BLACK,
  },
  txt: {
    fontFamily: FontFamily.INTER_BLACK,
    fontSize: 12,
    fontWeight: '400',
    color: Color.BLACK,
  },
  imageBackground: {
    flex: 1,
  },
  mixMateText: {
    fontFamily: FontFamily.INTER_REGULAR,
    fontSize: FontSize.SIZE_26,
    fontWeight: '600',
    color: Color.WHITE,
    

    textAlign: 'center',
  },
  titleText: {
    textAlign: 'center',

    fontFamily: FontFamily.NUNTION_SANS_EXTRA_BOLD,
    fontSize: FontSize.SIZE_32,

    fontWeight: '800',
  },
  button: {
    backgroundColor: Color.WHITE,
    padding: 15,
    borderRadius: 67.18,
    marginHorizontal: 60,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 5,
  },
  packageItem: {},
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:14
  },
  headerText: {
    fontFamily: FontFamily.INTER_BOLD,
    fontSize: 16,
    fontWeight: '700',
    color: Color.WHITE,
  },
  itemText:{
    fontFamily:FontFamily.INTER_BLACK,
    fontSize: 16,
    fontWeight: '400',
    color:Color.WHITE,


  },
  rightClick:{
    height:20,
    width:20,

  },
  buttonText: {
    fontFamily: FontFamily.INTER_BLACK,
    fontSize: FontSize.SIZE_16,
    fontWeight: '600',
    color: Color.TEXT_COLOR,
    textAlign: 'center',
  },
  subHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom:20,
  },
  flameIcon: {
    width: 24.86,
    height: 29.22,
    marginHorizontal: 5,
  },
  itemContainer: {
    flexDirection: 'row',
marginTop:10,
    justifyContent: 'space-around',
    width:'80%'
  },
  editViewIcon: {
    height: 68,
    width: 68,
    borderRadius: 34,
    justifyContent: 'center',
  },
  pencilIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  viewIcon: {
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: 'center',
  },
  settingIcon: {
    width: 15,
    height: 14,
    alignSelf: 'center',
  },
});

export default ProfileScreen;
