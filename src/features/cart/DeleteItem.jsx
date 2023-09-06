import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handlerDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button type="small" onClick={handlerDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
