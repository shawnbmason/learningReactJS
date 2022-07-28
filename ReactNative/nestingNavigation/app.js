import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Overview" component={OverviewScreen} />
  </Stack.Navigator>
);

const PictureNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Pictures" component={Pictures} />
  </Stack.Navigator>
);
// Add the new stack navigator above this line

const Pictures = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Pictures</Text>
  </View>
);

const OverviewScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Overview</Text>
  </View>
);

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
    <Tab.Screen name="Pictures" component={PictureNavigator} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});