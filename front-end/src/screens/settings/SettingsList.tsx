import { View, Text, StyleSheet } from "react-native"

export const SettingsList = () => {
    return (
        <View style={styles.wrapper}>
            <Text>
                Setting
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
       flex: 1,
       backgroundColor: '#FFE5B4',
       alignItems: 'center',
       justifyContent: 'center',       
    },
});