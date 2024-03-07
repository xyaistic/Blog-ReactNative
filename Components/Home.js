import { View, Text, SafeAreaView, StyleSheet, Modal, Button, Image, FlatList, Platform, TextInput, Pressable, ScrollView } from 'react-native'
import BlogCard from './BlogCard';
import { useState } from 'react';


export default function Home({ navigation }) {
    const [isVisible, setIsVisible] = useState(false)
    const [grid, setGrid] = useState(true)

    const userDetails = [
        {
            image: 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png',
            title: "Blog ",
            body: "lorem33"
        },
        {

            image: 'https://circlein.com/wp-content/uploads/2021/07/Craig-Size-1.png',
            title: "Blog 2",
            body: "Ivysaur"
        },
        {

            image: 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png',
            title: "Blog 3",
            body: "Ivysaur"
        },
        {

            image: 'https://circlein.com/wp-content/uploads/2021/07/Craig-Size-1.png',
            title: "Blog 4",
            body: "Ivysaur"
        },
        {
            image: 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png',
            title: "Blog 5",
            body: "Ivysaur"
        },
        {
            image: 'https://circlein.com/wp-content/uploads/2021/07/Craig-Size-1.png',
            title: "Blog 6",
            body: "Ivysaur"
        },
    ]

    function renderItem({ item }) {

        return (
            <View>
                <BlogCard title={item.title} body={item.body} image={item.image} navigation={navigation} grid={grid} />
            </View>

        );
    }

    return (
        <SafeAreaView style={[styles.safeContainer]}>
            <View style={styles.headerContainer}>
                <Image style={[styles.logoImage]} source={{ uri: 'https://seeklogo.com/images/O/ortto-data-platform-logo-835387DFBC-seeklogo.com.png' }} />
                <View style={[styles.textBox]}>
                    <TextInput style={[styles.textInput]} placeholder='Search ....' />
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

            <View style={{paddingBottom:200,}}>
                    <FlatList
                        data={userDetails}
                        renderItem={renderItem}
                        numColumns={!grid?1:2}
                        key={(!grid?'normal':'column')+'Key'}
                        keyExtractor={(item, index) => index.toString()}
                        />
            </View>
            <Modal visible={isVisible}
                transparent={true}

                animationType='slide'>
                <View style={[styles.modalContainer]}>
                    <View style={[styles.modalView]}>
                        <Text style={[styles.modalOptionText]}>Option 1</Text>
                        <Text style={[styles.modalOptionText]}>Option 2</Text>
                        <Text style={[styles.modalOptionText]}>Option 3</Text>
                        <Text style={[styles.modalOptionText]}>Option 4</Text>
                        <Pressable style={[styles.closeButton]} onPress={() => setIsVisible(!isVisible)}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Close
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    modalOptionText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 20,
        width: '100%',
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
        color: 'Black'
    },
    searchIcon: {
        width: 20,
        height: '100%',
        resizeMode: 'contain'
    }
});

