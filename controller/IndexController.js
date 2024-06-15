import {setCustomerList, setItemList , generateNextOrderId ,clearFields,setDate} from './OrderController.js';
import {loadAllItems} from './ItemController.js';

import { getAllCustomers } from '../model/CustomerModel.js';
import { getAllItems } from '../model/ItemModel.js';
import { getAllOrders } from '../model/OrderModel.js';



$(document).ready(function() {

  setDataToHomePage();

  $('#homePage').show();

  $('.nav-link').click(function(event) {
    event.preventDefault();

    $('section').hide();

    var targetSection = $(this).attr('href');

    $(targetSection).show();
    switch (targetSection) {

      case '#HomePage':
        $('.sec-name').text('POS System');
        document.title = "POS System";
        setDataToHomePage();
        break;

      case '#CustomerManage':
        $('.sec-name').text('Customer Manage');
        document.title = "Customer Manage";
        break;
      case '#ItemManage':
        $('.sec-name').text('Item Manage');
        document.title = "Item Manage";
        loadAllItems();
        break;
      case '#OrderManage':
        $('.sec-name').text('Order Manage');
        document.title = "Place Order";
        clearFields();
        setCustomerList();
        setItemList();
        generateNextOrderId();
        setDate();
        break;
      default:
        $('.sec-name').text('POS System');
        document.title = "POS System";
    }
  });
});

function setDataToHomePage() {
  let customers = getAllCustomers();
  let items = getAllItems();
  let orders = getAllOrders();

  $('#total-customers').text(customers.length);
  $('#total-items').text(items.length);
  $('#total-orders').text(orders.length);
}