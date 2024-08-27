import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const handleInput = (t) => {
    setInput(Number(t));
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCounter}>
        <Pressable onPress={() => dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <View style={styles.count}>
          <Text style={styles.countNumber}>{count}</Text>
        </View>
        <Pressable onPress={() => dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={String(input)}
          onChangeText={handleInput}
        />
        <Pressable onPress={() => dispatch(incrementByAmount(input))} style={styles.button}>
          <Text style={styles.buttonText}>Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  containerCounter: {
    flexDirection: 'row',
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    
    
  },
  button: {
    backgroundColor: colors.background,
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 3,
    margin: 5,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  count: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 'auto',
    textAlign: 'center',
    padding: 10,
  },
  containerInput: {
    flexDirection: 'row',
    margin: 10,
    borderColor: "white",
  },
  input: {
    width: 50,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 3,
    color: "white",
  },
  countNumber: {
    color: "white",
  }
});
