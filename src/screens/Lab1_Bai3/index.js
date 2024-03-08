import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Input from "../../components/Input";

const Lab1_Bai3 = () => {
    //email và password để lưu trữ giá trị của ô nhập liệu
    const [email, setEmail] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Input label="Tittle" placeholder="Place holder" value={email} onChangeText={setEmail}/>
                <Input label="Tittle" placeholder="Place holder" value={email} onChangeText={setEmail}/>
                <Input label="Tittle" placeholder="Place holder" value={email} onChangeText={setEmail}/>
                <Input label="Tittle" placeholder="Place holder" value={email} onChangeText={setEmail}/>
            </View>
        </View>
    );
};
export default Lab1_Bai3;
