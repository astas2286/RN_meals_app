import React from 'react';
import { StyleSheet,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: '#351401' },headerTintColor: 'white',contentStyle: { backgroundColor: '#3f2f25' } }}>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{ title: 'All Categories' }} />
          <Stack.Screen 
          name='MealsOverview' 
          component={MealsOverviewScreen} 
          // options={({route, navigation}) => {
          //   const catId= route.params.categoryId
          // return {
          //   title: catId,
          // }
          // }}
          />
          <Stack.Screen 
          name='MealDetails'
          component={MealDetailsScreen} 
          // options={{
          //   headerRight: () => {
          //   return <Button title="tap" onPress={() => alert('hello')}/>
          // }}}
          />
        </Stack.Navigator>
      </NavigationContainer >
    </>
  );
}


const styles = StyleSheet.create({
  container: {

  },
});
