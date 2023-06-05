import { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_PHOTOS } from "../../env";

export default function PlaceItem(props) {
    const { place,onPress } = props;
    const [heart, setHeart] = useState(false);

    const handleHeartPress = () => {
        setHeart(!heart);
    };
    const [starRating, setStarRating] = useState(place.vote.length);
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={{marginHorizontal:4,marginVertical:8}}>
                    <Image style={styles.img} source={{uri:`${API_PHOTOS}${place.image}`}} />

                    <View style={styles.footerContainer}>
                        <Text style={styles.title}>{place.name}</Text>
                        <View style={{ position: 'absolute', right: 4, top: -14 }}>
                            <TouchableOpacity onPress={handleHeartPress}>
                                <Ionicons name={'heart'} color={heart?'red':'white'} size={24} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.startContainer}>
                            <View style={styles.stars}>
                                <TouchableOpacity onPress={() => setStarRating(1)}>
                                    <Ionicons
                                        name={starRating >= 1 ? 'star' : 'star-outline'}
                                        size={18}
                                        style={starRating >= 1 ? styles.starSelected : styles.starUnselected}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setStarRating(2)}>
                                    <Ionicons
                                        name={starRating >= 2 ? 'star' : 'star-outline'}
                                        size={18}
                                        style={starRating >= 2 ? styles.starSelected : styles.starUnselected}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setStarRating(3)}>
                                    <Ionicons
                                        name={starRating >= 3 ? 'star' : 'star-outline'}
                                        size={18}
                                        style={starRating >= 3 ? styles.starSelected : styles.starUnselected}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setStarRating(4)}>
                                    <Ionicons
                                        name={starRating >= 4 ? 'star' : 'star-outline'}
                                        size={18}
                                        style={starRating >= 4 ? styles.starSelected : styles.starUnselected}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setStarRating(5)}>
                                    <Ionicons
                                        name={starRating >= 5 ? 'star' : 'star-outline'}
                                        size={18}
                                        style={starRating >= 5 ? styles.starSelected : styles.starUnselected}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.rating}>
                                <Text style={styles.ratingValue}>{starRating}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    img: {
        borderRadius: 10,
        width: 175,
        height: 175,
        resizeMode: 'cover'
    },
    footerContainer: {
        width: 175,
        height: 56,
        backgroundColor: "#CCA0A0A0",
        borderRadius: 10,
        position: 'absolute',
        bottom: 0

    },
    title: {
        color: "#FFFFFF",
        fontWeight: '700',
        left: 7,
        top: 8
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
    },
    starUnselected: {
        color: 'black',
    },
    starSelected: {
        color: '#ffb300',
    },

    startContainer: {
        position: 'absolute',
        bottom: 10,
        left: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },

    rating: {
        left: 12
    },
    ratingValue: {
        color: '#FFFFFF',
        fontWeight: '700'
    }
})