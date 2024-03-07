import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function BlogDetail({ route }) {
    const { title,image,body } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'start',
        paddingHorizontal: 20,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
        marginVertical:20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    body: {
        fontSize: 16,
    },
});
