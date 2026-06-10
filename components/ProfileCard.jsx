import { Image, StyleSheet, Text, View } from "react-native"

function ProfileCard({ name, role, avatar }){
    return(
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{uri: avatar}}
            />
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Role: {role}</Text>
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
        margin: 10
    },
    text: {
        fontSize: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12
    },
})

export default ProfileCard