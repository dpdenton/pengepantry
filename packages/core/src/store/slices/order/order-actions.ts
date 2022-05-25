import {useDispatch} from 'react-redux';
import {orderSlice} from 'store/slices/order/order-slice';

export const useTogglePantryItem = () => {
  const dispatch = useDispatch();
  return (id: string) =>
    dispatch(orderSlice.actions.togglePantryItemSelection(id));
};
