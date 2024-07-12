import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId, color } = route.params;

  const displayedMeals = MEALS.filter(meals =>
    meals.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(cat => cat.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList list={displayedMeals} color={color} />;
}

export default MealsOverviewScreen;
