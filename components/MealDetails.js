import React from "react"
import { View,Text,Platform,StyleSheet } from "react-native"

function MealDetails({ duration,complexity,affordability,style, textStyle }) {
    return (
        <View style={[styles.details,style]}>
            <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}
export default MealDetails

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0,height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        overflow: 'hidden',
        borderRadius: 8,
    },
    image: {
        width: "100%",
        height: 200
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },

})