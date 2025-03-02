import {Text, View, StyleSheet, FlatList} from 'react-native'
import {useState, useEffect, useLayoutEffect} from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'

import MealGridTile from '../components/MealGridTile';

function MealsListScreen({navigation, route})
{
    const [meals, setMeals] = useState(MEALS);
    const catid = route.params.categoryId;
    const displayedMeals = MEALS.filter( (mealItem) => {
        let ids = mealItem.categoryIds;
        for(let i=0; i<ids.length; i++)
        {
            if(ids[i] == catid)
            {
                return true;  
            }      
        }
    });


    // If you want to execute some side effect while transitioning to a screen,

    useLayoutEffect( () => {
        const category = CATEGORIES.find( (category) => category.id === catid);
        navigation.setOptions({title: category.title});
    }, [catid, navigation]);


    // If you want to execute some side effect after transitioning to a screen

    // useEffect( () => {
    //     const category = CATEGORIES.find( (category) => category.id === catid);
    //     navigation.setOptions({title: category.title});
    // }, [catid, navigation]);

    

    function renderMealGridItem(itemData)
    {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
            imageURL: item.imageUrl
        }

        function MealGridOnPressHandler()
        {
            navigation.navigate('MealDetailOverview', {mealId: itemData.item.id});
        }

        return (
            <MealGridTile {...mealItemProps}
                          onPress={MealGridOnPressHandler}/>
        );
    }

    return (
        <View>
            <FlatList
            data={displayedMeals}
            renderItem={renderMealGridItem}
            keyExtractor={(item) => {return item.id}}
            alwaysBounceVertical={false}/>
        </View>
    );
}
    
export default MealsListScreen;

const styles = StyleSheet.create({
    
});


