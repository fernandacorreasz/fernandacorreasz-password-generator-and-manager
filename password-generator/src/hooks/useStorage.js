import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];
    } catch (error) {
      console.log("Error getting item: ", error);
      return [];
    }
  };
    const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);
      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log("error save item", error);
    }
  }; 

  const removeItem = async (key, item) => {
    try {
        let passwords = await getItem(key);
        let myPasswords = passwords.filter((passwords) =>{
            return passwords !== item;
        } )

        await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
    } catch (error) {}
  }; 

  return {
  getItem,
  removeItem, 
  saveItem,
  }
};

export default useStorage;
