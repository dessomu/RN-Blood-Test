import { View, Text } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import Button from "../../src/components/ui/Button";
import { useTestStore } from "../../src/store/test.store";
import { useBookingStore } from "../../src/store/booking.store";

export default function TestDetails() {
  const { id } = useLocalSearchParams();
  const tests = useTestStore((state) => state.tests);
  const setTest = useBookingStore((state) => state.setTest);

  const test = tests.find((t) => t.id === id);

  if (!test) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Test not found</Text>
      </View>
    );
  }

  const handleBook = () => {
    setTest(test);
    router.push("/booking/confirm");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 12 }}>
        {test.name}
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 8 }}>
        Price: ₹{test.price}
      </Text>

      <Text style={{ marginBottom: 16, color: "#6b7280" }}>
        {test.fastingRequired
          ? "Fasting required before sample collection"
          : "No fasting required"}
      </Text>

      <Button title="Book Test" onPress={handleBook} />
    </View>
  );
}
