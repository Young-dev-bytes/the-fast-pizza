import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order, onClick }) {
  const fetch = useFetcher();
  return (
    <fetch.Form method="PATCH" className="text-right">
      <Button type="primary" onClick={onClick}>
        Make priority
      </Button>
    </fetch.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  console.log('request', request);
  console.log('params', params);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
