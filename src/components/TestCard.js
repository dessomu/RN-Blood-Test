import { View, Text, TouchableOpacity } from "react-native";

export default function TestCard({ test, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 6 }}>
        {test.name}
      </Text>

      <Text style={{ color: "#6b7280", marginBottom: 4 }}>₹{test.price}</Text>

      <Text
        style={{
          color: test.fastingRequired ? "#b45309" : "#065f46",
          fontSize: 12,
        }}
      >
        {test.fastingRequired ? "Fasting Required" : "No Fasting Needed"}
      </Text>
    </TouchableOpacity>
  );
}
