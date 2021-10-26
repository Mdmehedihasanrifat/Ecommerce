import React from 'react'
import SHOP_DATA from "../../ShopData";
import Collection from "../../Components/Collection/Collection";


class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const{collection}=this.state;
        return(
            <div className="Shop-page">
                {
                    collection.map(({id, ...others}) =>(<Collection key={collection.id} {...others}></Collection>))}
            </div>
        )
    }
}

export default Shop;