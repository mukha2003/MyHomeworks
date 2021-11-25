"use strict";

var CART = [// {name: 'milk', qty: 2, price: 28, total: 56},
  // {name: 'bread', qty: 1, price: 12, total: 12}
];

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
      total: qty * price
    });
  } else {
    CART[ind].qty += qty;
    CART[ind].total = CART[ind].qty * CART[ind].price;
  }

  document.getElementById('prod_name').value = '';
  document.getElementById('prod_qty').value = '1';
  document.getElementById('prod_price').value = '';
  panel.success('Product added successfully', true);
  shoppingList();
}

function shoppingList() {
  var cart_html = '';

  for (var i = 0; i < CART.length; i++) {
    cart_html += "<li>".concat(CART[i].name, " ").concat(CART[i].price, " &times; ").concat(CART[i].qty, " = ").concat(CART[i].total, "</li>");
  }

  document.getElementById('cart_list').innerHTML = cart_html;
}

shoppingList();

function showTotalBill() {
  var billTotal = 0;
  var tableBill = '<table>';

  for (var i = 0; i < CART.length; i++) {
    tableBill += '<tr>';
    tableBill += "<td>".concat(CART[i].name, "</td>");
    tableBill += "<td>".concat(CART[i].price, " &times; ").concat(CART[i].qty, "</td>");
    tableBill += "<td>".concat(CART[i].total, "</td>");
    tableBill += '</tr>';
    billTotal += CART[i].total;
  }

  document.getElementById('bill').innerHTML = tableBill + '</table>';
  document.getElementById("bill_foot").innerHTML = "TOTAL : ".concat(billTotal.toFixed(2));
}