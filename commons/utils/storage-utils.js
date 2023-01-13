import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorageData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log({ e });
        // todo - error handling
    }
};

export const getAyncStorageData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log({ e });
        // todo - error handling
    }
};
