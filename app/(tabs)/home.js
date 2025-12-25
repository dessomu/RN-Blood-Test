import { View, Text, FlatList } from "react-native";
import { router } from "expo-router";
import { useTestStore } from "../../src/store/test.store";
import TestCard from "../../src/components/TestCard";

export default function Home() {
  const tests = useTestStore((state) => state.tests);

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f9fafb" }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "600",
          marginBottom: 16,
        }}
      >
        Available Tests
      </Text>

      <FlatList
        data={tests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TestCard
            test={item}
            onPress={() => router.push(`/test/${item.id}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
