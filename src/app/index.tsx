import { View } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import { Target } from "@/components/Target";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entrada", value: "R$ 6,184.90" },
  output: { label: "Saída", value: "-R$ 883.65" },
};

const target = [
  {
    title: "Apple Watch",
    percentage: "50%",
    value: "R$ 580,00",
    total: "R$ 1.790,00",
  },
  {
    title: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    value: "R$ 900,00",
    total: "R$ 1.200,00",
  },
  {
    title: "Fazer uma viagem para o Rio de Janeiro",
    percentage: "75%",
    value: "R$ 2.000,00",
    total: "R$ 3.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <Target data={target} />
    </View>
  );
}
