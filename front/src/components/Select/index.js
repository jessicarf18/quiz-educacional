import React from 'react';
import { Picker } from '@react-native-picker/picker';


const Select = () => {
    return (
        <Picker selectedValue={"Selecione"}>
            <Picker.Item label="Selecione" value={"Selecione"}/>
            <Picker.Item label="Artes" value={"Artes"}/>
            <Picker.Item label="Ciências" value={"Ciências"}/>
            <Picker.Item label="História" value={"História"}/>
            <Picker.Item label="Inglês" value={"Inglês"}/>
            <Picker.Item label="Matemática" value={"Matemática"}/>
            <Picker.Item label="Português" value={"Português"}/>
        </Picker>
    )
}

export default Select;