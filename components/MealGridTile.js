import {View, Text, StyleSheet, Pressable, FlatList, Platform, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import MealInformation from './MealInformation';

function MealGridTile({title, id, imageURL, onPress, duration, complexity, affordability})
{
    const navigation = useNavigation();

    function mealDetailPressHandler()
    {
        navigation.navigate("MealDetailOverview", {mealId: id});
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}}
                       style={({pressed}) => 
                        pressed ? styles.buttonPressed : null}
                       onPress={mealDetailPressHandler}>
                
                {/* innerContainer created so that ios can have rounder corners */}
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image}
                            source={{uri: imageURL}}/>
                        <Text style={styles.text}>{title}</Text>
                    </View>
                    {/* <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}min</Text>
                        <Text style={styles.detailItem}>{complexity}</Text>
                        <Text style={styles.detailItem}>{affordability}</Text>
                    </View> */}
                    <MealInformation duration={duration}
                                     complexity={complexity}
                                     affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    );
}

export default MealGridTile;

const styles = StyleSheet.create({

    mealItem:{
        margin: 16,
        // padding: 26,
        borderRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },

    // for ios to have rounded corners
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },

    buttonPressed:{
        opacity: 0.5
    },  

    text:{
        fontSize: 18,
        fontWeight: 'Bold',
        textAlign: 'center',
        margin: 8
    },

    image:{
        height: 200,
        width: '100%'
    },

    details:{
        padding:8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    detailItem:{
        marginHorizontal: 4
    }
});
