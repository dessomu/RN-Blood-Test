import { View, Text } from "react-native";
import { router } from "expo-router";
import Button from "../../src/components/ui/Button";
import { useBookingStore } from "../../src/store/booking.store";

export default function BookingConfirm() {
  const test = useBookingStore((state) => state.selectedTest);

  if (!test) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No test selected</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 16 }}>
        Confirm Booking
      </Text>

      <View
        style={{
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#e5e7eb",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{test.name}</Text>
        <Text style={{ marginTop: 6 }}>Price: ₹{test.price}</Text>
        <Text style={{ marginTop: 6, color: "#6b7280" }}>
          {test.fastingRequired ? "Fasting Required" : "No Fasting Needed"}
        </Text>
      </View>

      <Button
        title="Proceed to Payment"
        onPress={() => router.push("/booking/payment")}
      />
    </View>
  );
}
