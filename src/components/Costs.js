import CostItem from "./CostItem";
import './css/Costs.css';

function Costs(props) {
    const costs = new Array(props);

    if (props) {
        return (
            <div className="costs">
                {
                    costs[0].arr.map((item) => {
                        return (<CostItem costDate={item.date} title={item.title} price={item.price} />);
                    })
                }
            </div>
        )
    } else {
        return null;
    }
}

export default Costs;
