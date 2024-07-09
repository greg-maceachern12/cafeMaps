import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function FavoritesScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Favorites Screen</Text>
    </View>
  );
}