import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import CategoryListScreen from './screens/CategoryListScreen';
import MealsListScreen from './screens/MealsListScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { CATEGORIES } from './data/dummy-data';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() 
{
  let screen = <CategoryListScreen/>;

  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle: {backgroundColor: "#351401"},
            headerTintColor: "white",
            contentStyle:{backgroundColor: "#352525"}
          }
        }
        >
          <Stack.Screen name="MealsCategories"
                        component={CategoryListScreen}
                        options={
                          {
                            title: "All Categories"
                          }}
                        />
          <Stack.Screen name="MealsOverview" 
                        component={MealsListScreen}
                        // options={ ({route, navigation}) => {
                        //     const catId = route.params.categoryId;
                        //     const cat = CATEGORIES.find( (category) => {category.id === catId});
                        //     return {title: catId};
                        // }}
                        />
          <Stack.Screen name="MealDetailOverview"
                        component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  ); 
}

const styles = StyleSheet.create({
  text:{
    color: 'red'
  }
});
