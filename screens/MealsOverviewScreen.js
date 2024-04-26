import React, { useLayoutEffect } from "react"
import { View,FlatList,StyleSheet,Text } from "react-native"
import { CATEGORIES,MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"

function MealsOverviewScreen({ route,navigation }) {
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0
    })


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title
        navigation.setOptions({ title: categoryTitle })
    }, [categoryId, navigation])

    function renderMealItem(itemData) {
        const item = itemData.item
        const mealProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return <MealItem {...mealProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>
    )
}
export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});