import { View, Text, TouchableOpacity } from "react-native";

export default function AddressCard({ address, onSelect }) {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        marginBottom: 12,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontWeight: "600" }}>{address.name}</Text>
      <Text style={{ marginTop: 4 }}>{address.address}</Text>
      <Text style={{ marginTop: 4, color: "#6b7280" }}>
        Phone: {address.phone}
      </Text>
    </TouchableOpacity>
  );
}
