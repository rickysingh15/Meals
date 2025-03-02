import {View, Text, StyleSheet} from 'react-native';

function MealInformation({duration, complexity, affordability, textStyle})
{
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItem, textStyle]}>{duration}min</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
        </View>
    );
}

export default MealInformation;

const styles = StyleSheet.create({
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