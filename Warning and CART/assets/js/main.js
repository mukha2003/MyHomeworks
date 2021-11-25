let CART = [
    // {name: 'milk', qty: 2, price: 28, total: 56},
    // {name: 'bread', qty: 1, price: 12, total: 12}
];

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
            total: qty*price
    });
    }else{
        CART[ind].qty+=qty;
        CART[ind].total = CART[ind].qty*CART[ind].price;
    }
    document.getElementById('prod_name').value ='';
    document.getElementById('prod_qty').value ='1';
    document.getElementById('prod_price').value = '';
    panel.success('Product added successfully',true);
    shoppingList();
}

function shoppingList(){
    let cart_html = '';
    for(let i = 0; i<CART.length;i++){
        cart_html += `<li>${CART[i].name} ${CART[i].price} &times; ${CART[i].qty} = ${CART[i].total}</li>`;
    }
    document.getElementById('cart_list').innerHTML = cart_html;
}
shoppingList();

function showTotalBill(){
  
    let billTotal = 0;
    let tableBill = '<table>';
    for(let i=0; i<CART.length;i++){
        tableBill +='<tr>';
        tableBill += `<td>${CART[i].name}</td>`;
        tableBill +=`<td>${CART[i].price} &times; ${CART[i].qty}</td>`;
        tableBill +=`<td>${CART[i].total}</td>`;
        tableBill +='</tr>';
        billTotal += CART[i].total;
    }
    document.getElementById('bill').innerHTML = tableBill + '</table>';
    document.getElementById("bill_foot").innerHTML = `TOTAL : ${billTotal.toFixed(2)}`;
}