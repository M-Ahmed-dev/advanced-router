import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex  items-center justify-between gap-4 text-sm">
        <div className="flex flex-col">
          <p>
            <span className="font-bold">{quantity}&times;</span> {name}
          </p>
          <p>
            {isLoadingIngredients ? 'Loading.....' : ingredients?.join(', ')}
          </p>
        </div>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
