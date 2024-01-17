import {useState } from 'react'
import{View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$^&*()-_=+[]{}|<>?/</>"

export function Home(){
const [size, setSize] = useState(10)
const [passwordValue, setPassword] = useState("")
const [modalVisible, setModalVisible] = useState(false);

function generatePassword(){
let password = "a";
for(let i = 0, n = charset.length; i < size; i++){
  password += charset.charAt(Math.floor(Math.random() * n))
}
setPassword(password)
setModalVisible(true)
}

return (
  <View style={styles.container}>
    <Image source={require("../../assets/logo.png")} style={styles.logo} />

    <Text style={styles.title}>{size} caracteres</Text>

    <View style={styles.area}>
      <Slider
        style={{ height: 50 }}
        minimumValue={6}
        maximumValue={25}
        minimumTrackTintColor="#392DE9"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FE8AEB"
        value={size}
        onValueChange={(value) => setSize(value.toFixed(0))}
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={generatePassword}>
      <Text style={styles.buttonText}>Gerar Senha</Text>
    </TouchableOpacity>

    <Modal visible={modalVisible} animationType="fade" transparent={true}> 
      <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
    </Modal>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    color:"#999999"
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#7CDFFF",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 18,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },

});
