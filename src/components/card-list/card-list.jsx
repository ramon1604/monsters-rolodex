//import { Component } from "react"; // Class component
import Card from "../card/card";
import './card-list.css';

// Functional component
const CardList = ({ monsters }) => {
    return (
        <div className={` card-list `}>
            {monsters.map((monster, index) => (
                <Card
                    key={index}
                    monster={monster}
                />
            ))}
        </div>
    )
}

/* 
// Class component
class CardList extends Component {
    render() {
        const { monsters } = this.props
        return (
            <div className={` card-list `}>
                {monsters.map((monster, index) => (
                    <Card
                        key={index}
                        monster={monster}
                    />
                ))}
            </div>
        )
    }
}
*/
export default CardList 