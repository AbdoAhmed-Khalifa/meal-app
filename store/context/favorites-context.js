import { createContext, useContext, useState } from 'react';
import { View } from 'react-native';

const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesIds, setFavoritesIds] = useState([]);

  function addFavorite(id) {
    setFavoritesIds(prevIds => [...prevIds, id]);
  }

  function removeFavorite(id) {
    setFavoritesIds(prevIds => prevIds.filter(fid => fid !== id));
  }

  const value = {
    ids: favoritesIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorite() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      'useFavorite must be used within a FavoritesContextProvider'
    );
  }
  return context;
}

export default FavoritesContextProvider;
export { useFavorite };
