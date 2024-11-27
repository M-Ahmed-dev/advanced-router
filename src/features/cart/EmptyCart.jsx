import Button from '../../ui/Button';

function EmptyCart() {
  return (
    <div>
      <Button to="/menu" type="small">
        &larr; Back to menu
      </Button>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
