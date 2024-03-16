import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function BlogDetail({ route }) {
    const { title, image, body } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={[styles.textBox]}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={[styles.textBox]}>
                <Text style={styles.body}>{body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        paddingHorizontal: 30
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'start',
        padding: 20,

    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
        marginVertical: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    body: {
        marginVertical:30,
        fontSize: 18,
    },
});
