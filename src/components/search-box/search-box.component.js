// import { Component } from "react";
import './search-box.style.css'

const Searchbox = ({className, placeholder, onChangeHandler }) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)



// class Searchbox extends Component {
//     render() {
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type="search"
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         );
//     }
// }

export default Searchbox;
