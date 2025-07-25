import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTasksToStorage = async (tasks, userEmail) => {
  try {
    const key = `@tasks_${userEmail}`;
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Saving failed:', e);
  }
};

export const getTasksFromStorage = async (userEmail) => {
  try {
    const key = `@tasks_${userEmail}`;
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Loading failed:', e);
    return [];
  }
};
