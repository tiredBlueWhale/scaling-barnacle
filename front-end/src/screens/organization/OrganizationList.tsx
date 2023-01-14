import { View, Text, StyleSheet } from "react-native"

export const OrganizationList = () => {
    return (
        <View style={styles.wrapper}>
            <Text>
                Organization
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
       flex: 1,
       backgroundColor: '#006400',
       alignItems: 'center',
       justifyContent: 'center',       
    },
});