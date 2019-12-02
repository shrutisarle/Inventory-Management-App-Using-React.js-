import React, {Component} from 'react';
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            filterText: props.filterText
        };
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleDestroy(id) {
        this.props.onDestroy(id);
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.values(this.state.products)
                        .filter(product => {
                            if (this.props.filterText === undefined) {
                                return true;
                            }

                            return product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0;
                        })
                        .map(product => {
                            return (
                                <ProductRow key={product.id} product={product} onDestroy={this.handleDestroy}/>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;
