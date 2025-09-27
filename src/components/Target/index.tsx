import { FlatList, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "@/theme";

import { Separator } from "../Separator";
import { router } from "expo-router";

export type TargetProps = {
  title: string;
  percentage: string;
  value: string;
  total: string;
};

type Props = {
  data: TargetProps[];
};

export function Target({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Metas</Text>
      <Separator color={colors.gray[200]} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <View style={styles.target}>
              <View>
                <Text style={styles.header}>{item.title}</Text>
                <View style={styles.description}>
                  <Text style={styles.label}>{item.percentage} • </Text>
                  <Text style={styles.label}>{item.value} de {item.total}</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} onPress={() => router.navigate("/target")} />
            </View>
            <Separator color={colors.gray[200]} />
          </View>
        )}
      />
    </View>
  );
}
