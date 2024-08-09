import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../global/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (text) => {
    setInput(text);
  };

  const handleRemoveInput = () => {
    setInput("");
    onSearch("");
    setError("");
  };

  const search = () => {
    const regex = /[^a-zA-Z0-9 ]/;
    if (regex.test(input)) {
      setError('Caracteres no válidos');
    } else {
      setError("");
      onSearch(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
            <TextInput
            style={styles.input}
            placeholderTextColor="#fff"
            placeholder="Buscar producto"
            value={input}
            onChangeText={handleInputChange}
            />
        <View style={styles.buttonContainer}>
            <Pressable onPress={search}>
                <AntDesign name="search1" size={28} color="black" />
            </Pressable>
            <Pressable onPress={handleRemoveInput}>
                <MaterialIcons name="cancel" size={28} color="black" />
            </Pressable>
        </View>
      </View>
         {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    backgroundColor: colors.background,
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'dotted',
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 8,
    color: colors.letter,
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.background,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    marginLeft: 15,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
