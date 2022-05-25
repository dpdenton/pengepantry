import {useAppStore} from 'store/store-selectors';

export const useOrderSlice = () => useAppStore(({order}) => order);

export const useOrderPantryItems = () => useOrderSlice().pantryItemIds;
