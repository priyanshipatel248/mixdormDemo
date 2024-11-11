import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import HeaderButton from '../component/headerButton';
import {Color, FontFamily, FontSize} from '../utils/theme';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomButton from '../component/customButton';
const {width} = Dimensions.get('window');

const ChatScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedDistance, setSelectedDistance] = useState<string | null>(null);

  const distances = [
    '10km',
    '20km',
    '30km',
    '40km',
    '50km',
    '60km',
    '70km',
    '80km',
    '90km',
    '100km',
  ];

  const handleSelect = (distance: string) => {
    setSelectedDistance(distance);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        {/* Header */}
        <HeaderButton
          onPress={function (value: any): void {
            throw new Error('Function not implemented.');
          }}
          title={'Mix'}
          titleStyle={styles.titleText}
          title2={'Dorm'}
          isBack
        />

        <View style={styles.containerProgress}>
          {/* Background progress bar */}
          <Progress.Bar
            progress={0.6}
            width={width - 40}
            height={4}
            color={Color.GREY_LIGHT}
            unfilledColor={Color.GREY_LIGHT}
          />

          <LinearGradient
            colors={[Color.PINK, Color.PRIMARY]}
            style={styles.progressGradient}
          />
        </View>

        <Text style={styles.questionText}>
          Your distance <Text style={styles.highlightText}>preference</Text>?
        </Text>

        {/* Circle Options */}
        <View style={styles.circleContainer}>
          {distances.map(distance => (
            <TouchableOpacity
              key={distance}
              style={[
                styles.circle,
                selectedDistance === distance && styles.selectedCircle,
              ]}
              onPress={() => handleSelect(distance)}>
              <Text style={styles.circleText}>{distance}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <CustomButton
          title={'Next'}
          onPress={() => {
            navigation.navigate('profile');
          }}
          
         />
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff758c',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginVertical: 20,
  },
  progressIndicator: {
    width: '30%',
    height: '100%',
    backgroundColor: '#ff758c',
    borderRadius: 2,
  },
  titleText:{
    textAlign: 'center',

    

    fontFamily: FontFamily.NUNTION_SANS_EXTRA_BOLD,
    fontSize: FontSize.SIZE_32,

    fontWeight: '800',
  },
  containerProgress: {position: 'relative', width: width - 40, height: 4},
  progressGradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: (width - 40) * 0.6, // Adjust based on progress (e.g., 30%)
    height: 4,
    borderRadius: 2,
  },
  questionText: {
    fontFamily: FontFamily.INTER_BLACK,
    fontSize: 34,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
  },
  highlightText: {
    color: '#ff758c',
  },
  circleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  circle: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    borderWidth: 2,
    borderColor: '#ff7eb3',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  selectedCircle: {
    borderColor: '#ff758c',
    backgroundColor: '#ffe0e6',
  },
  circleText: {
    fontSize: 16,
    color: '#999',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,



    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 67,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
