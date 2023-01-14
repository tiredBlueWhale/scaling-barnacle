import { Pressable, PressableProps, View, Text } from "react-native"

export type ButtonProps = PressableProps & React.RefAttributes<View>
export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <Pressable {...props}>
            {children}
        </Pressable>
    )
}