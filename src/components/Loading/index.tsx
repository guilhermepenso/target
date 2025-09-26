import { ActivityIndicator } from "react-native";

import { styles } from "./style";
import { colors } from "@/theme";

export function Loading(){
    return <ActivityIndicator color={colors.blue[500]} style={styles.container} />
}