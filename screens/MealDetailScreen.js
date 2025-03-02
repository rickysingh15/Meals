import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

import MealInformation from '../components/MealInformation';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

function MealDetailScreen({navigation, route})
{   
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find( (mealItem) => mealItem.id === mealId);
    
    useLayoutEffect( () => {
        navigation.setOptions({title: selectedMeal.title});
    }, [mealId, navigation]);
    

    return (
        <ScrollView style={styles.rootContainer}>
            {/* <Image /> */}
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealInformation duration={selectedMeal.duration}
                             complexity={selectedMeal.complexity}
                             affordability={selectedMeal.affordability}
                             textStyle={styles.detailText}/>

            <View style={styles.outerContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    {/* {selectedMeal.ingredients.map( (ingredient) => (
                        <Text key={ingredient}>{ingredient}</Text>))} */}
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    {/* {selectedMeal.steps.map( (step) => (
                        <Text key={step}>{step}</Text>))} */}
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({

    rootContainer:{
        marginBottom: 32
    },

    title:{
        fontWweight: 'bold',
        fontSize: 22,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },

    detailText:{
        color: 'white',
    },

    listContainer:{
        width: '80%' 
    },

    outerContainer:{
        alignItems: 'center'
    }

});