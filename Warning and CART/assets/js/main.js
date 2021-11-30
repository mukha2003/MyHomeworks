let CART = [
    {name: 'milk', qty: 2, price: 28, total: 56, buy:true},
    {name: 'bread', qty: 1, price: 12, total: 12, buy:false},
    {name: 'beer', qty: 2, price: 25, total: 50, buy:true},
    {name: 'cheese', qty: 1, price: 190, total: 190, buy:false}
];

let cartSort = "asc";


function checkAndAddProduct(){
    let name = document.getElementById('prod_name').value,
        qty = document.getElementById('prod_qty').value,
        price = document.getElementById('prod_price').value,
        valid = true;

    if(name == ''){
        valid = false;
    }

    if(qty == ''){
        valid = false;
    }else{
        qty = parseInt(qty);
        if(qty<=0){
            valid = false;
        }
    }

    if(price == ''){
        valid = false;
    }else{
        price = parseFloat(price);
        if(price<=0){
            valid = false;
        }
    }

    if(valid){
        addToCart(name,qty,price);
    }else{
        panel.warning('Please fill correct all fields',true);
    }
}

function addToCart(name, qty, price){
    let ind = CART.findIndex(el=>el.name==name);
    if(ind==-1){
        CART.push({
            name: name,
            qty: qty,
            price: price,
            total: qty*price,
            buy: false
    });
    }else{
        CART[ind].buy=false;
        CART[ind].qty+=qty;
        CART[ind].total = CART[ind].qty*CART[ind].price;
    }
    document.getElementById('prod_name').value ='';
    document.getElementById('prod_qty').value ='1';
    document.getElementById('prod_price').value = '';
    panel.success('Product added successfully',true);
    shoppingList();
}

const productRow = (item, i) => {
    return `
                <tr>                  
                    <td class="text-center">${item.name}</td>
                    <td class="text-center">${item.buy?`<span class="badge bg-success">yes</span>`:`<span 
                    class="badge bg-danger">no</span>`}</td>
                    <td class="text-end">${item.price.toFixed(2)}</td>
                    <td class="text-center">${item.qty}</td>
                    <td class="text-end">${item.total.toFixed(2)}</td>
                    <td class="text-end">
                    ${!item.buy?`<button type="button" class="btn btn-success btn-sm" onclick="buyProduct(${i})">Buy</button>`:''}
                    <button type="button" class="btn btn-danger btn-sm" onclick="deleteFromCart(${i})">Delete</button>
                    </td>
                </tr>
            `;
}

function shoppingList(){
    let cart_html = '';
    let total = CART.reduce(
        (accumPrice, cartItem) => {
        return accumPrice + cartItem.total},//первый параметр
        0);//второй параметр
    let total_bought = CART.filter(
        (item) => {
            return item.buy;
        }
        ).reduce(
            (accumPrice, cartItem) => {
            return accumPrice + cartItem.total},//первый параметр
            0);//второй параметр

    let total_notbought = CART.filter(
        (item) => {
            return !item.buy;
        }
        ).reduce(
            (accumPrice, cartItem) => {
            return accumPrice + cartItem.total},//первый параметр
            0);//второй параметр

    if(cartSort == 'asc'){
        CART.sort((a, b) => a.total - b.total); 
        } else {
            CART.sort((a, b) => b.total - a.total); 
    }



    CART.forEach((item, i) => {
        cart_html += !item.buy?productRow(item, i):'';
    });
    CART.forEach((item, i) => {
        cart_html += item.buy?productRow(item, i):'';
    });



    // for(let i = 0; i<CART.length;i++){        
    //     let item = CART[i];
    //     if(!item.buy){
    //         cart_html += productRow(item, i);       
    //     } 
    //         total += CART[i].total;         
    //     }

    //     for(let i = 0; i<CART.length;i++){        
    //         let item = CART[i];
    //         if(item.buy){
    //             cart_html += productRow(item, i);              
    //         }                  
    //     }




    document.getElementById("total").innerHTML = total.toFixed(2);
    document.getElementById("total_bought").innerHTML = total_bought.toFixed(2);
    document.getElementById("total_notbought").innerHTML = total_notbought.toFixed(2);
    document.getElementById('cart_list').innerHTML = cart_html;
}

function changeSort(){
    cartSort = (cartSort=='asc')?'desc':'asc'; 
    shoppingList();
}

shoppingList();



const deleteFromCart = (ind)=>{
    if(typeof CART[ind]!=='undefined'){
        if(confirm(`Remove ${CART[ind].name} from cart?`)){
        CART.splice(ind, 1);   
        panel.success('successfully removed',true);
        shoppingList();
        }else{
        panel.danger('Not found product for remove', true)
        }
    }
}

const buyProduct = (ind) => {
    if(typeof CART[ind]!=='undefined'){
        CART[ind].buy = true;
        shoppingList();
        panel.info('Product bought', true)
    }else {
        panel.danger('Not found product for buy', true)
    }
}

function showTotalBill(){
  
    let billTotal = 0;
    let tableBill = '<table class="font-monospace">';
    for(let i=0; i<CART.length;i++){
        tableBill +=`
        <tr>
            <td>${CART[i].name}</td>
            <td>${CART[i].price} &times; ${CART[i].qty}</td>
            <td class="text-end">${CART[i].total}</td>
        </tr>`;
        billTotal += CART[i].total;
    }
    let pdv = billTotal*20/100;
    document.getElementById('bill').innerHTML = tableBill + '</table>';
    document.getElementById("bill_foot").innerHTML = `TOTAL : ${billTotal.toFixed(2)}`;
    document.getElementById("pdv").innerHTML = `PDV 20% : ${pdv.toFixed(2)}`
}

function calcDiscount(){
    let billTotal = CART.reduce(
        (accumPrice, cartItem) => {
        return accumPrice + cartItem.total},//первый параметр
        0);//второй параметр
    let bill_disc = 0;
    let disc = +document.getElementById("disc_val").value;
    let disc_id = document.getElementById("disc").value;
    if(disc_id == 1){
        bill_disc = (billTotal * disc / 100).toFixed(2); 
        
    }
    if(disc_id == 2){
        bill_disc = disc.toFixed(2);
    }
    let total_d = billTotal-bill_disc
    document.getElementById("disc_total").innerHTML = `Discount : ${bill_disc}`;
    document.getElementById("total_d").innerHTML = `<b>Total with discount : ${total_d.toFixed(2)}</b>`
}



