import React from 'react'
import { footerItems } from '../../Data'
import Item from './Item';
const ItemsContainer = () => {
    const { productds, company } = footerItems
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 sm:px-2 px-5 py-16">
            <Item Links={productds}  title='Products'/>
            <Item Links={company} title='company'/>
        </div>
    )
}

export default ItemsContainer