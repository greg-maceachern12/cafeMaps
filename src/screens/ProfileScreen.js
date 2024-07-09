import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function ProfileScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Profile Screen</Text>
    </View>
  );
}