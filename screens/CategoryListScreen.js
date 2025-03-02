import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useState } from 'react';

import CategoryGridTile from '../components/CategoryGridTile';
import MealsListScreen from './MealsListScreen';
import { CATEGORIES } from '../data/dummy-data';

function CategoryListScreen({navigation}) 
{
    const [categories, setCategories] = useState(CATEGORIES);


    function renderCategoryItem(itemData)
    {
        function categoryPressHandler() 
        {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }

        return (
            <CategoryGridTile bgcolor={itemData.item.color}
                              title={itemData.item.title}
                              navigateHandler={categoryPressHandler}/>
        );
    }

    return (
        <View style={styles.rootContainer}>
            <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => {return item.id}}
            alwaysBounceVertical={false}
            numColumns={2}/>            
        </View> 
    );

}

export default CategoryListScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1
    }
});