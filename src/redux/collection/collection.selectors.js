import { createSelector } from 'reselect';

const selectCollections = state => state.shop;
export const selectCollectionsItems = createSelector(
  [selectCollections],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollectionsItems],
  collections => Object.keys(collections).map(key => collections[key])
);
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollectionsItems],
    collections => collections[collectionUrlParam]
  );
