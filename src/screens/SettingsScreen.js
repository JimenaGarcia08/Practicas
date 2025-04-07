import { NativeBaseProvider, useColorMode, Text, Button, Center, Box, useColorModeValue } from 'native-base';

function UseColorMode() {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue("Light", "Dark");
    const bg = useColorModeValue("warmGray.50", "coolGray.900"); 

    return (
        <Box flex={1} bg={bg} safeArea p="4" w="100%" justifyContent="center" alignItems="center">
            <Text fontSize="lg" mb={5} color={useColorModeValue("black", "white")}>
                The active color mode is{" "}
                <Text bold fontSize="18px">{text}</Text>
            </Text>
            <Button onPress={toggleColorMode} h={10}>
                Toggle
            </Button>
        </Box>
    );
}

function SettingsScreen() {
    return (
        <NativeBaseProvider>
            <UseColorMode />
        </NativeBaseProvider>
    );
};

export default SettingsScreen;
