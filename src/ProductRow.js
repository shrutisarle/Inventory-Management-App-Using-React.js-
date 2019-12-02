import React, {Component} from 'react';

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.destroy = this.destroy.bind(this);
    }

    destroy() {
        this.props.onDestroy(this.props.product.id);
    }

    render() {
        const {name, category, price} = this.props.product;

        return (
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>
                    <button className="btn btn-info" onClick={this.destroy}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;
