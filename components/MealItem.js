import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View,Text,Pressable,Image,StyleSheet,Platform } from "react-native"
import MealDetails from "./MealDetails"

function MealItem({ id,title,imageUrl,duration,complexity,affordability }) {
    const navigation = useNavigation()

    function pressHandler() {
        // @ts-ignore
        navigation.navigate('MealDetails',{ mealId: id })
    }


    return (
        <View style={styles.mealItem}>
            <Pressable
                onPress={pressHandler}
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable >
        </View>
    )
}
export default MealItem

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