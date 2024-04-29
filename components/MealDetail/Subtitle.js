import React from "react"
import { Text,View,StyleSheet } from "react-native"

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}
export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    subtitleContainer: {
        marginVertical: 4,
        padding: 6,
        marginHorizontal: 12,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2
    }
})