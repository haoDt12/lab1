
import {Button,FlatList,Image,ScrollView,TouchableOpacity,StyleSheet,Text,TextInput,View,Alert} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Renderitem from "./component/index.js";
// import Dialog from "./component/dialog.js";
const App = () => {
  const [arr, setarr] = useState([]);

  const [name, setname] = useState("");
  const [mota, setmota] = useState("");
  const [linkanh, setlinkanh] = useState("");
  const [status , setStatus] = useState(false);

  return (
<ScrollView>
    <View style={[styles.container]}>
      <StatusBar hidden={true}></StatusBar>

      <Text style={styles.tt}>Họ tên : Đinh Trọng Hào</Text>
      <Text style={styles.tt}>Mã sinh viên: PH27524</Text>
         <StatusBar hidden={true}></StatusBar>

         
         <Button 
        // title={status 
        //   ? 'Bấm để ẩn giao diện':4
        //   'Bấm để hiện giao diện'
        // }
        color="#f194ff"
        title={`Bấm để hiện giao diện`}
        onPress={() => setStatus(true)}
        //onPress={plus} 
      />
      {
        status
         ?  <> 
        <TextInput
         style={styles.input}
    onChangeText={(text) => setname(text)}
    value={name}
    placeholder="Tên"
  />
  <TextInput
    style={styles.input}
    value={mota}
    onChangeText={(text) => setmota(text)}
    placeholder="Mô tả"
  />
  <TextInput
   style={styles.input}
    value={linkanh}
    onChangeText={(text) => setlinkanh(text)}
    placeholder="Link ảnh"
    />

    <TouchableOpacity>
    <Text style={styles.button} onPress={() => setStatus(false)}>
      CANEL
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={async () => {
     
      setarr([
        ...arr,
        {
          name: name,
          mota: mota,
          linkanh: linkanh,
        },
      ]);
    }}
  >
    <Text style={styles.button}>SAVE</Text>
  </TouchableOpacity>
      </>
      :null
      }
  
      {arr.length == 0 ? null : (
        <View
          style={{
      
            borderColor: "yellow",
            width: "90%",
            marginTop: 20,
            borderRadius: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <ScrollView>
            {arr.map((value, index) => {
              return <Renderitem item={value} key={index} />;
            })}
          </ScrollView>
        </View>
      )}
    </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    marginTop: 5,
    borderColor: "black",
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  tt: {
    fontSize: 20,
    marginRight: 150,
    color: "green"
  },

     
});