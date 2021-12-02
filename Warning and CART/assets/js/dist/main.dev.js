"use strict";

var CART = [{
  name: 'milk',
  qty: 2,
  price: 28,
  total: 56,
  buy: true
}, {
  name: 'bread',
  qty: 1,
  price: 12,
  total: 12,
  buy: false
}, {
  name: 'beer',
  qty: 2,
  price: 25,
  total: 50,
  buy: true
}, {
  name: 'cheese',
  qty: 1,
  price: 190,
  total: 190,
  buy: false
}];
var cartSort = "asc";

function checkAndAddProduct() {
  var name = document.getElementById('prod_name').value,
      qty = document.getElementById('prod_qty').value,
      price = document.getElementById('prod_price').value,
      valid = true;

  if (name == '') {
    valid = false;
  }

  if (qty == '') {
    valid = false;
  } else {
    qty = parseInt(qty);

    if (qty <= 0) {
      valid = false;
    }
  }

  if (price == '') {
    valid = false;
  } else {
    price = parseFloat(price);

    if (price <= 0) {
      valid = false;
    }
  }

  if (valid) {
    addToCart(name, qty, price);
  } else {
    panel.warning('Please fill correct all fields', true);
  }
}

function addToCart(name, qty, price) {
  var ind = CART.findIndex(function (el) {
    return el.name == name;
  });

  if (ind == -1) {
    CART.push({
      name: name,
      qty: qty,
      price: price,
      total: qty * price,
      buy: false
    });
  } else {
    CART[ind].buy = false;
    CART[ind].qty += qty;
    CART[ind].total = CART[ind].qty * CART[ind].price;
  }

  document.getElementById('prod_name').value = '';
  document.getElementById('prod_qty').value = '1';
  document.getElementById('prod_price').value = '';
  panel.success('Product added successfully', true);
  shoppingList();
}

var productRow = function productRow(item, i) {
  return "\n                <tr>                  \n                    <td class=\"text-center\">".concat(item.name, "</td>\n                    <td class=\"text-center\">").concat(item.buy ? "<span class=\"badge bg-success\">yes</span>" : "<span \n                    class=\"badge bg-danger\">no</span>", "</td>\n                    <td class=\"text-end\">").concat(item.price.toFixed(2), "</td>\n                    <td class=\"text-center\">").concat(item.qty, "</td>\n                    <td class=\"text-end\">").concat(item.total.toFixed(2), "</td>\n                    <td class=\"text-end\">\n                    ").concat(!item.buy ? "<button type=\"button\" class=\"btn btn-success btn-sm\" onclick=\"buyProduct(".concat(i, ")\">Buy</button>") : '', "\n                    <button type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"deleteFromCart(").concat(i, ")\">Delete</button>\n                    </td>\n                </tr>\n            ");
};

function shoppingList() {
  var cart_html = '';
  var total = CART.reduce(function (accumPrice, cartItem) {
    return accumPrice + cartItem.total;
  }, //первый параметр
  0); //второй параметр

  var total_bought = CART.filter(function (item) {
    return item.buy;
  }).reduce(function (accumPrice, cartItem) {
    return accumPrice + cartItem.total;
  }, //первый параметр
  0); //второй параметр

  var total_notbought = CART.filter(function (item) {
    return !item.buy;
  }).reduce(function (accumPrice, cartItem) {
    return accumPrice + cartItem.total;
  }, //первый параметр
  0); //второй параметр

  if (cartSort == 'asc') {
    CART.sort(function (a, b) {
      return a.total - b.total;
    });
  } else {
    CART.sort(function (a, b) {
      return b.total - a.total;
    });
  }

  CART.forEach(function (item, i) {
    cart_html += !item.buy ? productRow(item, i) : '';
  });
  CART.forEach(function (item, i) {
    cart_html += item.buy ? productRow(item, i) : '';
  }); // for(let i = 0; i<CART.length;i++){        
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

function changeSort() {
  cartSort = cartSort == 'asc' ? 'desc' : 'asc';
  shoppingList();
}

shoppingList();

var deleteFromCart = function deleteFromCart(ind) {
  if (typeof CART[ind] !== 'undefined') {
    if (confirm("Remove ".concat(CART[ind].name, " from cart?"))) {
      CART.splice(ind, 1);
      panel.success('successfully removed', true);
      shoppingList();
    } else {
      panel.danger('Not found product for remove', true);
    }
  }
};

var buyProduct = function buyProduct(ind) {
  if (typeof CART[ind] !== 'undefined') {
    CART[ind].buy = true;
    shoppingList();
    panel.info('Product bought', true);
  } else {
    panel.danger('Not found product for buy', true);
  }
};

function showTotalBill() {
  var billTotal = 0;
  var tableBill = '<table class="font-monospace">';

  for (var i = 0; i < CART.length; i++) {
    tableBill += "\n        <tr>\n            <td>".concat(CART[i].name, "</td>\n            <td class=\"text-end\">").concat(CART[i].price, " &times; ").concat(CART[i].qty, "</td>\n            <td class=\"text-end\">").concat(CART[i].total, "</td>\n        </tr>");
    billTotal += CART[i].total;
  }

  document.getElementById('bill').innerHTML = tableBill + '</table>';
  var bill_disc = 0;
  var disc = +document.getElementById("disc_val").value;
  var disc_id = document.getElementById("disc").value;

  if (disc_id == 1) {
    bill_disc = (billTotal * disc / 100).toFixed(2);
  }

  if (disc_id == 2) {
    bill_disc = disc.toFixed(2);
  }

  var total_d = billTotal - bill_disc;
  document.getElementById("disc_total").innerHTML = "Discount : ".concat(bill_disc);
  document.getElementById("total_d").innerHTML = "<b>TOTAL TO PAY : ".concat(total_d.toFixed(2), "</b>");
  document.getElementById("bill_foot").innerHTML = "Total sum : ".concat(billTotal.toFixed(2));
  document.getElementById("pdv").innerHTML = "PDV 20% : ".concat((billTotal * 20 / 100).toFixed(2));
} // function calcDiscount(){
//     let billTotal = CART.reduce(
//         (accumPrice, cartItem) => {
//         return accumPrice + cartItem.total},//первый параметр
//         0);//второй параметр
//     let bill_disc = 0;
//     let disc = +document.getElementById("disc_val").value;
//     let disc_id = document.getElementById("disc").value;
//     if(disc_id == 1){
//         bill_disc = (billTotal * disc / 100).toFixed(2); 
//     }
//     if(disc_id == 2){
//         bill_disc = disc.toFixed(2);
//     }
//     let total_d = billTotal-bill_disc
//     document.getElementById("disc_total").innerHTML = `Discount : ${bill_disc}`;
//     document.getElementById("total_d").innerHTML = `<b>TOTAL : ${total_d.toFixed(2)}</b>`
// }


document.querySelector("#total_btn").onclick = function () {
  showTotalBill(); // calcDiscount();
};