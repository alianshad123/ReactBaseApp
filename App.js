import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import NotificationScreen from './src/NotificationScreen';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './src/DrawerContent';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    
      <Stack.Navigator
        screenOptions={{
          statusBarColor: '#0163d2',
          headerStyle: {
            backgroundColor: '#0163d2',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('./assets/ic_menu.png')}
                      style={styles.image}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
   
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeDrawer" component={StackNav} />
    </Drawer.Navigator>
  );
};

export default function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain', // Adjust the resizeMode based on your image aspect ratio and desired appearance
  },
  imageContainer: {
    paddingRight: 30,
  },
});
