import { useCallback } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native"
import { Button } from "@components"
import { useState } from "react";
import { Link } from "@react-navigation/native";

export const Login = ({ setIsLoggedIn }: any) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = useCallback(() => {
        setIsLoggedIn(true)
    }, [],);

    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={setUserName}
                    value={userName}
                    placeholder="User Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                />
                <Button style={styles.button} onPress={onLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 64
    },
    container: {
        flex: 1,
        maxWidth: 300,
    },
    input: {
        borderBottomColor: '#B8B8B8',
        borderBottomWidth: .5,
        paddingBottom: 4,
        marginBottom: 16
    },
    button: {
        alignSelf: 'center',
        padding: 8,
        backgroundColor: '#006994',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: '50%'
    },
    buttonText: {
        color: '#fff',
    }
});