import React, { useState, useEffect } from "react"; // Functional component
//import React, { Component } from "react"; // Class component
import './search-box.css';

// Functional Component
const SearchBox = ({placeholder, onChange}) => {
    const [inputObj, setInputObj] = useState('')

    useEffect(() => {
        if (typeof (inputObj) === 'object') inputObj.focus()
    }, [inputObj])

    return (
        <div>
            <input
                ref={ele => setInputObj(ele)}
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