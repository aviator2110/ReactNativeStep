import { StyleSheet, Text, View } from "react-native"

export default function ProfileCard({ name, city, favorite_language }){
    return(
        <View style={styles.card}>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>City: {city}</Text>
            <Text style={styles.text}>Favorite program language: {favorite_language}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: '#008cff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#006fd6',
        borderRadius: 12,
    },
    text: {
        fontSize: 20,
    },
})