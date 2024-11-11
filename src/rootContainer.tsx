
import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen,ChatScreen,CreatorScreen } from './screens';

const RootContainer: React.FC = () => {
  const navigationRef = useRef<any>();
  const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
       
          <Stack.Screen
            name="chat"
            component={ChatScreen}
            options={{ headerShown: false }}
          />
       
          <Stack.Screen
            name="profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name="creator"
            component={CreatorScreen}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default RootContainer;
