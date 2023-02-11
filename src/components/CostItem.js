import './css/CostItem.css';
import CostDate from './CostDate.js';
import Card from './Card.js';

function CostItem(props) {
    const title = props.title;

    const price = props.price;


    return (
        <Card className='cost-item'>
            <CostDate costDate = {props.costDate} />
            <div className='cost-item__description'>
                <h2>{title}</h2>
                <div className='cost-item__price'>${price}</div>
            </div>
        </Card>
    );
}

export default CostItem;