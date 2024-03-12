// import { Component } from "react";
import "./card-list.style.css";
import Card from '../card/card.component'


const Cardlist = ({ Monsters }) => (
  <div className="wrap">
  <div className="card-list">
    {Monsters.map((monster) => {
      return <Card monster={monster}></Card>
    })}
  </div>
  </div>
);

// class Cardlist extends Component {
//   render() {
//     const { Monsters } = this.props;

//     return (
//       <div className="card-list">
//         {Monsters.map((Monsters) => {
//           return <Card Monsters={Monsters} />;
//         })}
//       </div>
//     );
//   }
// }

export default Cardlist;
