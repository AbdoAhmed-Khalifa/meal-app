import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

function CategoryCard({ title, color, onPress }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: '#eee' }}
        style={styles.pressContainer}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
  },
  pressContainer: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
