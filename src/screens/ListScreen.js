import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function ListScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>List Screen</Text>
    </View>
  );
}