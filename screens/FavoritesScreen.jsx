import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import { useFavorite } from '../store/context/favorites-context';

function FavoritesScreen() {
  const { ids } = useFavorite();

  const favoriteMeals = MEALS.filter(meal => ids.includes(meal.id));
  console.log(favoriteMeals);
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }

  return <MealsList list={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
