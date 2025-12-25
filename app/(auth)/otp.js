import { View, Text, TextInput } from "react-native";
import Button from "../../src/components/ui/Button";
import { useAuthStore } from "../../src/store/auth.store";

export default function Otp() {
  const login = useAuthStore((state) => state.login);

  const handleVerify = () => {
    login({ name: "Somnath" }, "dummy-token");
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Enter OTP</Text>

      <TextInput
        keyboardType="number-pad"
        placeholder="123456"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 14,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
}
