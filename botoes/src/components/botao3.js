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
                    title="*"
                    onPress={executar()}
                />

                <Button
                    title="9"
                    onPress={executar()}
                />
                <Button
                    title="6"
                    onPress={executar()}
                />
                <Button
                    title="3"
                    onPress={executar()}
                />
            </div>
        </>
    )
}

const styles = StyleSheet.create({
    caixa: {
      flex: 1,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    div1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',  
    }
});