class ProductsPage{

    getPageTitle(){
        return cy.get('.title')
    }

    getItemName(){
        return cy.get('div.inventory_item_name')
    }

    getAddToCartButton(){
        return cy.contains('Add to cart')
    }

    add(item){
        this.getItemName().each(($el, index, $list) => {
            if($el.eq(index).text() == item){
                this.getAddToCartButton().eq(index).click()     
            }
        })
    }

    getShoppingCartLink(){
        return cy.get('a[class="shopping_cart_link"]')
    }

}

export default ProductsPage;