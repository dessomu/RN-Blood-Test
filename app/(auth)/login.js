import { View, Text, TextInput } from "react-native";
import { router } from "expo-router";
import Button from "../../src/components/ui/Button";

export default function Login() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 24 }}>
        Login
      </Text>

      <TextInput
        placeholder="Phone or Email"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 14,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      <Button title="Continue" onPress={() => router.push("/(auth)/otp")} />
    </View>
  );
}
