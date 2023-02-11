import './css/Card.css';
import './css/CostItem.css';
import './css/Costs.css';

function Card(props) {
    console.log(props.className);
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;