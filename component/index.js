import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
const Useritem = (props) => {
  let linkmacdinh = "https://tse3.mm.bing.net/th?id=OIP.jw6CWZz8p6BTlhlvGcqQ1wHaEK&pid=Api&P=0"
  const [render, setrender] = useState("");

  const checklinkanh = async (URL) => {
    let condition = (await fetch(URL)).status == 404;

    return condition;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respon = await checklinkanh(props.item.linkanh);
        if (!respon) {
          setrender(props.item.linkanh);
        } else {
          setrender(linkmacdinh);
        }
      } catch (error) {
        setrender(linkmacdinh);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <View style={{ flexDirection: "row", marginVertical: 4 }}>
        {render ? (
          <Image
            style={{ width: 90, height: 90 ,borderRadius: 20}}
            source={{ uri: render }}
          />
        ) : null}

        <View style={{ marginTop: 20 }}>
          <Text
            style={styles.thongtin}
          >{`Tên: ${props.item.name}`}</Text>
          <Text
            style={styles.thongtin}
          >{`Mô tả: ${props.item.mota}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Useritem;

const styles = StyleSheet.create({
    thongtin: {
        marginHorizontal: 15,
        fontSize: 16,
        color: "red",
    }
});