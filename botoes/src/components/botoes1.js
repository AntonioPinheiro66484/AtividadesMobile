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
                    title="/"
                    onPress={executar()}
                />
                <Button
                    title="7"
                    onPress={executar()}
                />
                <Button
                    title="4"
                    onPress={executar()}
                />
                <Button
                    title="1"
                    onPress={executar()}
                />
            </div>
    </>
    )
}

const styles = StyleSheet.create({
    div1:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        
    },

  });