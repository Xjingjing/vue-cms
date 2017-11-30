export default{
    getAllCarts(){
        var result = localStorage.getItem("cartinfo");
        result = result ? JSON.parse(result) : [];
        return result;
    },
    getCartsInfo(id){
        var carts = this.getAllCarts();
        var temp = carts.filter(v =>{
            return v.id == id;
        })
        temp = temp.length > 0? temp[0] : null;
        return temp;
    },
    getAllCount(){
        var carts = this.getAllCarts();
        var result = 0;
        carts.forEach(v => {
            result += v.count;
        })
        return result;
    },
    addToCarts(cart){
        var carts = this.getAllCarts();

        var temp = carts.filter(v => {
            return v.id == cart.id;
        })

        if(temp.length > 0){
            temp[0].count += cart.count;
        }else{
            carts.push(cart);
        }

        localStorage.setItem("cartinfo",JSON.stringify(carts));
    }
}