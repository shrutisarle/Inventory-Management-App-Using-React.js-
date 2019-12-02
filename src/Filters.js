import React, {Component} from 'react';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.props.onFilter({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" className="form-control" name='filterText' placeholder="Search" onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default Filters;