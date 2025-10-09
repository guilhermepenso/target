import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  label: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fontFamily.regular,
  },
  value: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fontFamily.regular,
  },
});
