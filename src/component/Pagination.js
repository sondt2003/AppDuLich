import { StyleSheet, View, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Pagingnation({ data, scrollX ,index}) {
    return (
        <View style={styles.container}>
            {data?.map((_, idx) => {
                const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[12,24,12],
                    extrapolate:'clamp'
                });

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange:["#B9B1FF","#897CFF","#B9B1FF"],
                    extrapolate:'clamp'
                });
                return <Animated.View key={idx.toString()} style={[styles.dot,{width:dotWidth,backgroundColor},]} />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:20
    },

    dot: {
        width: 12,
        height: 12,
        borderRadius: 50,
        marginHorizontal: 3,
        backgroundColor:'#B9B1FF'
       
    },

    dotActive:{
        backgroundColor: '#897CFF'
    }
})