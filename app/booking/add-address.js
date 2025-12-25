import { View, Text, TextInput } from "react-native";
import { router } from "expo-router";
import Button from "../../src/components/ui/Button";
import { useAddressStore } from "../../src/store/address.store";

export default function AddAddress() {
  const addAddress = useAddressStore((state) => state.addAddress);

  const handleSave = () => {
    addAddress({
      id: Date.now().toString(),
      name: "Home",
      phone: "9999999999",
      address: "New Address, City",
    });

    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Add Address</Text>

      <TextInput
        placeholder="Address"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 14,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      <Button title="Save Address" onPress={handleSave} />
    </View>
  );
}
