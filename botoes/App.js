import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botoes1 from './src/components/botoes1'
import Botoes2 from './src/components/botoes2'
import Botoes3 from './src/components/botoes3'

export default function App() {
  return (
    <View style={styles.container}>
        <Botoes1/>
        <Botoes2/>
        <Botoes3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#90ee90',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

});
