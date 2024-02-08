import { useSelector } from 'react-redux';
import Orders from './Orders';
import { MisOrdenesContainerStyled } from './OrdersStyles';

import Loader from "../UI/Loader/Loader";

const MisOrders = () => {

    const {orders, loading, error} = useSelector(state => state.orders);
    // console.log('orders:', orders);
    // console.log('loading:', loading);
    // console.log('error:', error);
    if (loading && !orders) {
        return <Loader styles={{ height: '50px', width: '50px' }} />
    };

    if (error) {
        return <h2 style={{ textAlign: 'center' }} > {error} </h2>
    }

    return (
        <MisOrdenesContainerStyled>
        {
            orders?.length ? (
            orders.map((order) => {
                return <Orders {...order} key={order._id} />
            })
            ) : (
            <h2>Aun no tenes pedidos realizados</h2>
            )
        }
        
        </MisOrdenesContainerStyled>
    );
};

export default MisOrders;