

export const CartReducer=(state,action )=>{

    const {shoppingCart,totalPrice,qty}=state ;

    let product ;
    let index ;
    let updatePrice ;
    let updateQty ;

    switch (action.type){

        case "ADD_TO_CART":
            const check = shoppingCart.find(pro=> pro.id=== action.id) ;

            if (check){
                alert("this Product already added")
                return state
            } else {
               product = action.products ;
               product['qty']=1 ;
               updateQty = qty+1 ;
               updatePrice = totalPrice + product.price;
               return {shoppingCart:[product,...shoppingCart],
                   totalPrice:updatePrice, qty:updateQty
               }
            }

        case "INC":
            product = action.cart ;
            product.qty = product.qty+1;
            updatePrice = totalPrice +product.price;
            updateQty = qty +1 ;
            index =shoppingCart.findIndex(cart=>cart.id ===action.id);
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalPrice:updatePrice, qty:updateQty }

        case "DEC":
            product = action.cart ;
            if (product.qty>1){
                product.qty = product.qty-1
                updatePrice = totalPrice -product.price;
                updateQty = qty -1 ;
                index =shoppingCart.findIndex(cart=>cart.id ===action.id);
                shoppingCart[index] = product ;
                return {shoppingCart: [...shoppingCart],totalPrice:updatePrice , qty:updateQty }
            }

            else {
                return  state
            }

        case "DELETE":
            const filtered = shoppingCart.filter(product=>product.id !==action.id)
            product = action.cart ;
            updatePrice =totalPrice-product.price*product.qty;
            updateQty =qty -product.qty
            return {shoppingCart: [...filtered],totalPrice:updatePrice , qty:updateQty}

        default: return state ;
    }

}