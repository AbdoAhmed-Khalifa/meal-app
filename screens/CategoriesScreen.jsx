import { FlatList } from 'react-native';
import { CATEGORIES } from './../data/dummy-data';
import CategoryCard from '../components/CatCard';
function CategoriesScreen({ navigation }) {
  function handlePress(itemData) {
    navigation.navigate('MealsOverview', {
      categoryId: itemData.item.id,
      title: itemData.item.title,
      color: itemData.item.color,
    });
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <CategoryCard
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={handlePress.bind(this, itemData)}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
