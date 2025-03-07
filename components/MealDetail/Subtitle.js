import {Text, View, StyleSheet} from 'react-native';


function Subtitle({children})
{
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e2b497',
    },

    subtitleContainer:{
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 8
    }
});