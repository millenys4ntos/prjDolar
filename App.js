import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

export default function App() {
  const [dolar, setDolar] = useState("");

  async function buscarDolar(){
    const response = await Api.get('json/last/USD-BRL');
    setDolar(response.data.USDBRL);

  }

  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.text}> Converter dólar para real</Text>

        <TouchableOpacity 
          style={styles.botao}
          onPress={buscarDolar}
        > 
          <Text style={styles.txtBotao}> Converter</Text>
        </TouchableOpacity>

        <Dolar data={dolar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc8dd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bloco:{
    width: '100%',
    alignItems:'center',
  },

  text: {
    fontSize: 30,
    color: '#fff',
  },

input:{
  width: '80%',
  marginLeft:'5%',
  borderBottomWidth:2,
  marginTop:20,
  fontSize:30,
},

botao:{
  width: '80%',
  height: 40,
  marginTop:30,
  backgroundColor:'#fff',
  borderRadius: 10,
},

txtBotao:{
  fontSize:20,
  textAlign:'center',
  color: '#ffc8dd',
}

});
