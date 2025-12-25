import { TouchableOpacity, Text } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#0f766e",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "600" }}>{title}</Text>
    </TouchableOpacity>
  );
}
