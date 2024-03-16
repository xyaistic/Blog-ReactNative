import { View, Text, SafeAreaView, StyleSheet, Modal, Button, Image, FlatList, Platform, TextInput, Pressable, Switch, ScrollView, TouchableOpacity } from 'react-native'
import BlogCard from './BlogCard';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Home({ navigation, }) {

    const [isVisible, setIsVisible] = useState(false)
    const [grid, setGrid] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [addForm, setAddForm] = useState(true)
    const [formImage, setFormImage] = useState('');
    const [formTitle, setFormTitle] = useState('');
    const [formBody, setFormBody] = useState('');

    const [blogList, setBlogList] = useState([]);


    useEffect(() => {
        // setBlogList(userDetails)
        axios.get('http://localhost:8000/userDetails')
            .then(response => {
                setBlogList(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        console.log(blogList)
    },[])

    const handleSubmit = () => {
        const blogData = {
            image: formImage,
            title: formTitle,
            body: formBody,
        };


        setFormImage('');
        setFormTitle('');
        setFormBody('');
        setAddForm(true);

        axios.post('http://localhost:8000/userDetails', blogData)
            .then(response => {
                setBlogList(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    };


    function renderItem({ item }) {
        if (searchText === '') {
            return (
                <View>
                    <BlogCard title={item.title} body={item.body} image={item.image} navigation={navigation} grid={grid} />
                </View>

            );
        }
        if (item.title.toLowerCase().includes(searchText.toLowerCase())) {

            return (
                <View>
                    <BlogCard title={item.title} body={item.body} image={item.image} navigation={navigation} grid={grid} />
                </View>

            );
        }

    }

    return (
        <SafeAreaView style={[styles.safeContainer]}>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Image style={[styles.logoImage]} source={{ uri: 'https://seeklogo.com/images/O/ortto-data-platform-logo-835387DFBC-seeklogo.com.png' }} />
                    <Pressable onPress={() => setAddForm(!addForm)}>
                        <Image style={[styles.filterImage, { width: 30, height: 30 }]} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2661/2661440.png' }} />
                    </Pressable>
                </View>
                <View style={[styles.textBox]}>
                    <TextInput style={[styles.textInput]}
                        clearButtonMode='always'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => setSearchText(text)}
                        placeholder='Search ....' />
                    <Image style={[styles.searchIcon]} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' }} />
                </View>
            </View>
            <View style={styles.filterContainer}>

                <Pressable onPress={() => setIsVisible(!isVisible)} >
                    <View style={[styles.filterBox]}>
                        <Image style={[styles.filterImage]} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6590/6590958.png' }} />
                        <Text style={{ fontSize: 20 }}>Filters</Text>
                    </View>
                </Pressable>
                <View style={[styles.filterBox]}>
                    <Image style={[styles.filterImage]} source={{ uri: 'https://static.thenounproject.com/png/22384-200.png' }} />
                    <Text style={{ fontSize: 20 }}>Sort</Text>
                </View>
                <Pressable onPress={() => setGrid(!grid)}>
                    <View style={[styles.filterBox]}>
                        <Image style={[styles.filterImage]} source={{ uri: 'https://cdn.icon-icons.com/icons2/1674/PNG/512/grid_110962.png' }} />
                    </View>
                </Pressable>

            </View>

            <View style={{ paddingBottom: 200, }}>

                <FlatList
                    data={blogList}
                    renderItem={renderItem}
                    numColumns={!grid ? 1 : 2}
                    key={(!grid ? 'normal' : 'column') + 'Key'}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <Modal visible={isVisible}
                transparent={true}

                animationType='slide'>
                <View style={[styles.modalContainer]}>
                    <View style={[styles.modalView]}>
                        <View>
                            <Image style={{ width: 70, height: 5, marginVertical: 20 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25232.png' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between' }}>
                            <Text style={[styles.modalOptionText]}>Option 1</Text>
                            <Switch
                                trackColor={{ false: 'gray', true: 'lightgreen' }}
                                // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="black"
                                // onValueChange={toggleSwitch}
                                value={true}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', marginVertical:10, justifyContent: 'space-between' }}>
                            <Text style={[styles.modalOptionText]}>Option 2</Text>
                            <Switch
                                trackColor={{ false: 'gray', true: 'lightgreen' }}
                                // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="black"
                                // onValueChange={toggleSwitch}
                                value={true}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', marginBottom:50,justifyContent: 'space-between' }}>
                            <Text style={[styles.modalOptionText]}>Options 3</Text>
                            <Switch
                                trackColor={{ false: 'gray', true: 'lightgreen' }}
                                // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="black"
                                // onValueChange={toggleSwitch}
                                value={false}
                            />
                        </View>
                        
                        <Pressable style={[styles.closeButton]} onPress={() => setIsVisible(!isVisible)}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Close
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>




            <Modal visible={!addForm}>

                <View style={[styles.FormContainer]}>
                    <Pressable style={{ alignItems: 'flex-end', width: '100%', marginVertical: 20 }} onPress={() => setAddForm(!addForm)}>
                        <Image style={[styles.filterImage, { width: 50, height: 50 }]} source={{ uri: 'https://static.thenounproject.com/png/34085-200.png' }} />
                    </Pressable>

                    <TextInput
                        style={styles.input}
                        placeholder="Image URL"
                        value={formImage}
                        autoCorrect={false}
                        onChangeText={setFormImage}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={formTitle}
                        autoCapitalize='none'
                        autoCorrect={false}
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
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    FormContainer: {
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
        alignItems: 'center',
        // backgroundColor: 'red'
    },
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
        fontSize: 18,
    },
    bodyInput: {
        height: 120,
        fontSize: 18,
        textAlignVertical: 'top',
    },

    modalOptionText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        paddingVertical: 5
    },

    closeButton: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'lightgray',
        borderRadius: 10
    },
    modalView: {
        width: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        backgroundColor: 'rgba(246, 246, 246, 1)'
    },
    modalContainer: {
        justifyContent: 'flex-end',
        width: "100%",
        height: '100%',
        // marginTop: 50,
        backgroundColor: 'rgba(1, 1, 1, 0.25)',
        borderRadius: 20,
        alignItems: 'center',
    },
    scrollViewContainer: {
        paddingVertical: 10,
    },
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    headerContainer: {
        // height: Platform.OS==='android'?150:100,
        // backgroundColor: 'red',
        paddingHorizontal: 30,
        alignItems: 'start',
        justifyContent: 'end',
    },
    filterContainer: {
        flexDirection: 'row',
        // height: 40,
        // backgroundColor: 'lightgray',
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoImage: {
        marginTop: Platform.OS === 'android' ? 30 : 0,
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    filterImage: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        resizeMode: 'contain',

    },
    filterBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        backgroundColor: '#e9ecef'
    },
    textBox: {
        flexDirection: 'row',
        width: '100%',
        padding: 0,
        marginBottom: 10,
        backgroundColor: 'lightgray',
        borderRadius: 50,
    },
    textInput: {
        width: '90%',
        // backgroundColor: 'gray',
        height: 40,
        paddingHorizontal: 20,
        fontSize: 20,
    },
    searchIcon: {
        width: 20,
        height: '100%',
        resizeMode: 'contain'
    }
});

