import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';

import MealsListScreen from '../screens/MealsListScreen';

function CategoryGridTile(props)
{
    console.log("bg color is ", props.bgcolor)

    return (
        <View style={styles.gridItem}>
            <Pressable style={({pressed}) => 
                        [styles.button, pressed ? styles.buttonPressed : null]}

                       onPress={props.navigateHandler}
                       android_ripple={{color: '#ccc'}}>
                <View style={[styles.innerContainer,{backgroundColor: props.bgcolor}]}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({

    gridItem:{
        flex:1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },

    buttonPressed:{
        opacity: 0.5
    },

    button:{
        flex:1
    },

    innerContainer:{
        flex:1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontWeight: 'bold',
        fontSize: 18
    }
});