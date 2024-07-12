import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetail from './../components/MealDetail';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import { useLayoutEffect, useState } from 'react';
import IconButton from '../components/IconButton';
import { useFavorite } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const mealData = MEALS.find(meal => meal.id === mealId);
  const { ids, addFavorite, removeFavorite } = useFavorite();
  const isFavorite = ids.includes(mealData.id);
  console.log(isFavorite);
  function handleFavIcon() {
    if (isFavorite) {
      removeFavorite(mealData.id);
    } else {
      addFavorite(mealData.id);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color={isFavorite ? 'red' : 'white'}
            icon={isFavorite ? 'heart' : 'heart-outline'}
            onPress={handleFavIcon}
          />
        );
      },
    });
  }, [navigation, isFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealData.title}</Text>
      <MealDetail
        affordability={mealData.affordability}
        complexity={mealData.complexity}
        duration={mealData.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List list={mealData.ingredients} />
          <Subtitle title="Step" />
          <List list={mealData.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: '#ccc',
  },
  subTitle: {
    color: '#e2b497',
    marginVertical: 4,
    padding: 6,
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
    textAlign: 'center',
    marginHorizontal: 80,
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
