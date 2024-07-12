import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Subtitle({ title }) {
  return <Text style={styles.subTitle}>{title}</Text>;
}

const styles = StyleSheet.create({
  subTitle: {
    color: '#e2b497',
    marginVertical: 4,
    padding: 6,
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
    textAlign: 'center',
    marginHorizontal: 12,
  },
});
