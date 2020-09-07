import {createSelector} from 'reselect'

export const selectShop = (state) => state.store
export const shopSelector = createSelector([ selectShop ], (store) => store.collections);

export const SelectisCollectionFetching = createSelector([selectShop], shop => shop.isFetching)

export const shopSelectorForObjects = createSelector(
	[ shopSelector ],
	(collections) => (collections ? Object.keys(collections).map((keys) => collections[keys]) : [])
);
export const isCollectionFetching = createSelector([selectShop], shop=> shop.isFetching)
 