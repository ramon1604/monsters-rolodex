//import React, { Component } from "react"; // Class component
import './search-box.css';

// Functional Component
const SearchBox = ({ placeholder, onChange }) => {
    const inputBox = ele => { if (ele != null)  ele.focus() }
    return (
        <div>
            <input
                ref={inputBox}
                className={` search-box `}
                type="search"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

/*
// Class component
class SearchBox extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
    }

    componentDidMount = () => {
        this.focusTextInput()
    }

    focusTextInput = () => this.inputRef.current.focus()

    render() {
        return (
            <div>
                <input
                    ref={this.inputRef}
                    className={` search-box `}
                    type="search"
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}
*/
export default SearchBox 