import { StyleSheet, Text, View } from "react-native"

export const SplashScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>
                SplashScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center'
    },
});