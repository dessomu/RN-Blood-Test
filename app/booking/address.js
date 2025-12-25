import { View, Text, FlatList } from "react-native";
import { router } from "expo-router";
import AddressCard from "../../src/components/AddressCard";
import Button from "../../src/components/ui/Button";
import { useAddressStore } from "../../src/store/address.store";
import { useBookingStore } from "../../src/store/booking.store";

export default function AddressSelect() {
  const addresses = useAddressStore((state) => state.addresses);
  const selectAddress = useAddressStore((state) => state.selectAddress);
  const setBookingAddress = useBookingStore((state) => state.setAddress);

  const handleSelect = (address) => {
    selectAddress(address);
    setBookingAddress(address);
    router.push("/booking/payment");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 16 }}>
        Select Address
      </Text>

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AddressCard address={item} onSelect={() => handleSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        title="Add New Address"
        onPress={() => router.push("/booking/add-address")}
      />
    </View>
  );
}
