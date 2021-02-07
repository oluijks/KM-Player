import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import { View } from '../components/Themed';
import albumCategories from '../data/albumCategories';

export default function HomeScreeen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory
            title={item.title}
            albums={item.albums}
          />
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
