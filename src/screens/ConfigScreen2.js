import { Switch, VStack, HStack, Center, Toast, Text, NativeBaseProvider } from "native-base";

const Config2 = () => {
  return (
    <VStack space={4} alignItems="stretch">
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="lg">Depuración USB</Text>
        <Switch
          defaultIsChecked
          colorScheme="primary"
          onToggle={() =>
            Toast.show({
              title: "Depuración USB activada",
              placement: "bottom",
            })
          }
        />
      </HStack>

      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="lg">Wi-Fi</Text>
        <Switch
          defaultIsChecked
          colorScheme="secondary"
          onToggle={() =>
            Toast.show({
              title: "Red inalámbrica conectada",
              placement: "bottom",
            })
          }
        />
      </HStack>

      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="lg">Silencio</Text>
        <Switch
          defaultIsChecked
          colorScheme="emerald"
          onToggle={() =>
            Toast.show({
              title: "Modo silencio activado",
              placement: "bottom",
            })
          }
        />
      </HStack>
    </VStack>
  );
};

function ConfigScreen2() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Config2 />
      </Center>
    </NativeBaseProvider>
  );
}

export default ConfigScreen2;
