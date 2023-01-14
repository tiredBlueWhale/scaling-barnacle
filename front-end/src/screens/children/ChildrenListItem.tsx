import { useCallback } from "react";
import { Text, StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Child } from "../../models";


export type ChildrenListItemProps = Child;
export const ChildrenListItem: React.FC<ChildrenListItemProps> = ({ firstName, lastName }) => {
    const navigation = useNavigation<any>();

    const navigateToDetail = useCallback(
        () => {
            navigation.navigate('Detail', { firstName, lastName });
        },
        [firstName, lastName, navigation],
    );
    return (
        <Pressable style={styles.item} onPress={navigateToDetail}>
            <Text>{firstName}{' '}{lastName}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        borderBottomColor: '#8b8b8b',
        borderBottomWidth: .5,
        paddingVertical: 8,
    },
});