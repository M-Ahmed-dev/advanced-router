import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import {
  addItem,
  decreaseItemQuantity,
  getCurrentQuantity,
  getTotalQuantity,
  increaseItemQuantity,
} from '../cart/cartSlice';
import { DeleteButton } from '../cart/CartItem';
import UpdateCartQuantity from '../cart/UpdateCartQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantity(id));

  function handleAddItem() {
    const createOrder = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(createOrder));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {currentQuantity ? (
            <div className="flex gap-3">
              <DeleteButton pizzaId={id}>Delete from cart</DeleteButton>

              <div className="flex gap-2">
                <Button
                  type="round"
                  onClick={() => dispatch(decreaseItemQuantity(id))}
                >
                  -
                </Button>
                <span>{currentQuantity}</span>
                <Button
                  type="round"
                  onClick={() => dispatch(increaseItemQuantity(id))}
                >
                  +
                </Button>
              </div>
            </div>
          ) : (
            !soldOut && (
              <div className="flex items-center gap-5">
                <Button type="small" onClick={handleAddItem}>
                  Add to cart
                </Button>
              </div>
            )
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
