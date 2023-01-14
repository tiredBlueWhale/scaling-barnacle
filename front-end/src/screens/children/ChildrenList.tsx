import { StyleSheet, FlatList } from "react-native"
import { ChildrenListItem, ChildrenListItemProps } from "./ChildrenListItem"
import PocketBase from 'pocketbase';
import { useEffect } from "react";

const pb = new PocketBase('http://127.0.0.1:8090');

export const ChildrenList = ({navigation}: any) => {
    const children: ChildrenListItemProps[] = [...Array(3).fill(0).map((_, index) => ({ id: index.toString(), firstName: `${index}_First`, lastName: `${index}_Last` }))]

    useEffect(() => {
        const test = async () => {
            const resultList = await pb.collection('children').getFullList()
            const adminData = await pb.admins.authWithPassword('god@mail.com', 'god@mail.com');
            console.log(resultList)
            console.log(adminData)
        }
        test();
    }, [])
    

    return (
        <FlatList
            style={styles.list}
            data={children}
            renderItem={({ item }) => <ChildrenListItem {...{navigation, ...item}} />}
            keyExtractor={(item: ChildrenListItemProps) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        paddingLeft: 8,
    },
});