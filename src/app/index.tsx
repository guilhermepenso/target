import { View } from "react-native";
import HomeHeader from "@/components/HomeHeader";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entrada", value: "R$ 6,184.90" },
  output: { label: "Saída", value: "-R$ 883.65" },
};

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
    </View>
  );
}
