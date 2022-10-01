import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';

export default function CalculadoraFinanceira() {

    const [receita, setReceita] = useState(null);
    const [despesas, setDespesas] = useState(null);


    function inserir(){
        

    }

    function resetFields(){
        
    }
    return (
        <View style={styles.containerPai}>
            <View style={styles.containerHead}>
                <View style={styles.containerColuna}>
                    <View style={styles.containerDir}>
                        <View style={styles.containerReceita}>
                            <TextInput 
                            value={receita}
                            onChangeText={setReceita}
                            placeholder="RECEITAS"
                            style={styles.txtInputReceita}></TextInput>
                        </View>
                        <View style={styles.containerDespesa}>
                            <TextInput 
                            value={despesas}
                            onChangeText={setDespesas}
                            placeholder="DESPESAS"
                            style={styles.txtInputDespesas}></TextInput>
                        </View>

                    </View>
                    <View style={styles.containerEsq}>
                        <TouchableOpacity style={styles.btnIserir}>
                            <FontAwesome name="send-o" size={80} color="black" />
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
            <View style={styles.containerMiddle}>
                <Text style={styles.txtMiddle}>CONTROLE FINANCEIRO</Text>

            </View>
            <View style={styles.containerList}>

            </View>

        </View>
    )
}