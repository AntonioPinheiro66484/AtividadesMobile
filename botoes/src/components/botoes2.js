import React from "react";
import {Button, StyleSheet} from 'react-native'

export default comp=>{
    function executar(){
        console.warn('executando')
    }
    return (
    <>
        <div className={styles.div1}>
            <Button
                title="+"
                onPress={executar()}
            />
            <Button
                title="8"
                onPress={executar()}
            />
            <Button
                title="5"
                onPress={executar()}
            />
            <Button
                title="2"
                onPress={executar()}
            />
        </div>
    </>
    )
}

const styles = StyleSheet.create({
    caixa: {
      flex: 1 ,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    div1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        
    }
});