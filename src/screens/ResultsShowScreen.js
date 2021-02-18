import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.details}>
        <Feather name='phone-call' size={15} /> Contact Number: {result.phone}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  details: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray',
    marginHorizontal: 10,
    marginBottom: 10,
    borderTopWidth: 2,
    borderColor: '#4444',
    borderBottomWidth: 2,
  },
  name: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    alignSelf: 'center',
    marginHorizontal: 10,
    marginBottom: 8,
    height: 200,
    width: 300,
    borderRadius: 4,
  },
});

export default ResultsShowScreen;
