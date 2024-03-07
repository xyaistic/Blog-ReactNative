import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function BlogCard({ title, body, image, navigation, grid }) {
    const handlePress = () => {
        navigation.navigate('BlogDetail', { title, body, image });

    };
    if (grid===true) {
        
        return(
            <View>
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.cardGrid}>
                    <Image style={styles.cardGridImage} source={{ uri: image }} />
                    <View style={styles.contentGridBox}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>{title}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'normal', color: 'black' }}>{body}</Text>
                    </View>
                </View>
            </TouchableOpacity>


        </View>
        )
    } else {
        return(
            <View>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={{ uri: image }} />
                        <View style={styles.contentBox}>
                            <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>{title}</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'normal', color: 'black' }}>{body}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

}

const styles = StyleSheet.create({

    cardGrid: {
        width: 180,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 18,
        marginVertical: 10,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .3,
        borderColor: 'gray',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.51,
        elevation: 2,

    },
    card: {
        borderWidth: .3,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.51,
        elevation: 2,
        marginVertical: 10,
        width: "auto",
        height: 120,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
    },
    cardImage: {
        resizeMode: 'contain',
        borderRadius: 50,
        marginHorizontal: 20,
        width: 100,
        height: 100,
    },
    cardGridImage: {
        resizeMode: 'contain',
        // backgroundColor:'yellow',
        borderRadius: 50,
        width: 100,
        height: 80,
    },
    contentBox: {
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        // backgroundColor:'red'
    },
    contentGridBox: {
        justifyContent: 'center',
        width: "100%",
        // height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        // backgroundColor:'green'
    }
});
