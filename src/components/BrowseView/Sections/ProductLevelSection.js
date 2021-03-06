import React, { Component } from 'react';
import ProductLevelDropDown from '../DropDowns/ProductLevelDropDown';
import ProductLevelItem from '../ItemList/ProductLevelItem';
 
class ProductLevelSection extends Component {
    componentDidMount() {
    }

    render() {
        const items = [1,2,3,4,5];
        const productLevelItems = items.map((item, index) => 
            <ProductLevelItem key={index} {...item}></ProductLevelItem>
        );

        return (
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <ProductLevelDropDown></ProductLevelDropDown>
                        <div className="columns browsingList">
                            {productLevelItems}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default ProductLevelSection;