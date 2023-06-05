import { Animated, Dimensions, FlatList, View } from "react-native";
import Slides from '../data';
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import { useRef, useState, useEffect } from "react";
import { API_PLACE } from "../../env";

const deviceWidth = Dimensions.get("window").width;

export default function Slider(props) {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null); // Thêm useRef
  const {data} = props;
  const dataLength = Slides.length; // Thêm dataLength
  const scrollInterval = useRef(null); // Thêm useRef

  useEffect(() => {
    // Khởi tạo setInterval và xử lý tự động cuộn
    scrollInterval.current = setInterval(() => {
      // Tự động cuộn tới phần tử tiếp theo
      const newIndex = (index + 1) % dataLength;
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    }, 2000); // Khoảng thời gian tự động cuộn (2 giây)

    // Xử lý tự động cuộn khi scrollX thay đổi
    const listener = scrollX.addListener(({ value }) => {
      // Kiểm tra trạng thái cuộn có phải do người dùng cuộn hay không
      if (!scrollX._offsetAnimation) {
        // Tự động cuộn tới phần tử tiếp theo
        const newIndex = Math.floor(value / deviceWidth);
        setIndex(newIndex);
      }
    });

    return () => {
      // Xóa setInterval khi unmount component
      clearInterval(scrollInterval.current);
      scrollX.removeListener(listener);
    };
  }, [index]);

  const handleOnScroll = event => {
    // Xóa setInterval hiện tại và bắt đầu một setInterval mới sau 2 giây
    clearInterval(scrollInterval.current);
    scrollInterval.current = setInterval(() => {
      const newIndex = (index + 1) % dataLength;
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    }, 2000); // Khoảng thời gian tự động cuộn (2 giây)

    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        renderItem={({ item }) => <SlideItem item={item} />}
        ref={flatListRef} // Thêm ref
      />
      <Pagination data={data} scrollX={scrollX} index={index} />
    </View>
  );
}