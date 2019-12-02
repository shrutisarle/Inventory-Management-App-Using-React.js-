import React, {Component} from 'react';

const RESET_VALUES = {
    id: '',
    category: '',
    price: '',
    name: ''
};

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
        };

        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => {
            prevState.product[name] = value;
            return {product: prevState.product};
        });
    }

    handleSave(e) {
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES), errors: {}
        });
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Enter a new product</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" onChange={this.handleChange}
                               value={this.state.product.name}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text" className="form-control" name="category" onChange={this.handleChange}
                               value={this.state.product.category}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control" name="price" onChange={this.handleChange} value={this.state.product.price}/>
                    </div>

                    <button className="btn btn-info" onClick={this.handleSave}>Save</button>
                </form>
            </div>
        );
    }
}

export default ProductForm;
