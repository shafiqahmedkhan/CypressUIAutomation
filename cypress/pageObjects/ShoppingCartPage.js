class ShoppingCartPage{

    getProductName(){
        return cy.get('div.inventory_item_name')
    }

    getProductQuantity(){
        return cy.get('.cart_quantity')
    }

    verifyProductName(productName){
        this.getProductName(productName).each(($el, index, $list) => {
            if($el.eq(index).text() == productName)
                assert(true, 'Product appears to in the shopping cart' )
            else
                assert(false, 'Product does not appear in the shopping cart' )
        
        })
    }

}

export default ShoppingCartPage;