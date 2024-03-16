import React, { useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';

const AddBlog = ({ navigation } ) => {
    const [formImage, setFormImage] = useState('');
    const [formTitle, setFormTitle] = useState('');
    const [formBody, setFormBody] = useState('');

    
    const handleSubmit = () => {
        const blogData = {
            image: formImage,
            title: formTitle,
            body: formBody,
        };
        navigation.navigate('Home', { blogData: blogData });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Image URL"
                value={formImage}
                onChangeText={setFormImage}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={formTitle}
                onChangeText={setFormTitle}
            />
            <TextInput
                style={[styles.input, styles.bodyInput]}
                placeholder="Body"
                value={formBody}
                onChangeText={setFormBody}
                multiline={true}
                numberOfLines={4}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    bodyInput: {
        height: 120,
        textAlignVertical: 'top',
    },
});

export default AddBlog;
