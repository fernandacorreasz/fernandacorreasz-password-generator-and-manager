 import { useState, useEffect } from 'react';
 import { useIsFocused } from '@react-navigation/native';
 import{View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passworditem';

export function Password() {
  const [listPassword, setListPassword] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass");
      console.log(passwords);
      setListPassword(passwords);
    }
    loadPasswords();
  }, [focused]);

  async function handleDeletePassword(item) {
    const password = await removeItem("@pass", item);
    setListPassword(password);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listPassword}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => handleDeletePassword(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#7CDFFF",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 14,
    color: "#fff",
  },
}); 