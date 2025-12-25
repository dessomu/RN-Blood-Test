import { View, Text } from "react-native";
import Button from "../../src/components/ui/Button";
import { useAuthStore } from "../../src/store/auth.store";

export default function Profile() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 20, marginBottom: 24 }}>Profile</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
