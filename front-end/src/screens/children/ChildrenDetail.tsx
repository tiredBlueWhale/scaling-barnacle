import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChildrenStackParamList } from "@routes";
import { ScrollView, Text, StyleSheet } from "react-native"

type Props = NativeStackScreenProps<ChildrenStackParamList, 'Detail'>;
export const ChildrenDetail = ({ route }: Props) => {
    const { firstName, lastName } = route.params;
    return (
        <ScrollView>
            <Text>{firstName}</Text>
            <Text>{lastName}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {},
});