import { StyleSheet } from "react-native";
import { colors, fontFamily } from "~/src/theme";

export const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        fontFamily: fontFamily.medium
    },
    container: {
        gap: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "center",
    },
    target: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12
    },
    label: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.gray[500]
    },
    description: {
        flexDirection: "row"
    }
})