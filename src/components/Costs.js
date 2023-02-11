import CostItem from "./CostItem";
import Card from "./Card.js";
import './css/Costs.css';

function Costs(props) {
    if (props.costs) {
        return (
            <Card className="costs">
                {
                    props.costs.map((item) => {
                        return (<CostItem costDate={item.date} title={item.title} price={item.price} />);
                    })
                }
            </Card>
        )
    } else {
        return null;
    }
}

export default Costs;
