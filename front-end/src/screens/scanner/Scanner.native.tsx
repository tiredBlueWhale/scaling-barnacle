import { View, Text, StyleSheet } from "react-native"

export const Scanner = () => {
    return (
        <View style={styles.wrapper}>
            <Text>
                ScannerNative
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
       flex: 1,
       backgroundColor: '#899499',
       alignItems: 'center',
       justifyContent: 'center',       
    },
});