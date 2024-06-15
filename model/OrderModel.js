import { orders } from "../db/DB.js";
import { OrderDto } from "../dto/OrderDto.js";

export function getAllOrders(){
  return orders;
}

export function saveOrder(order){
  if(!isOrderExist(order.orderId) && order instanceof OrderDto){
    orders.push(order);
    return true;
  }
}

function isOrderExist(orderId){
  return orders.some(order => order.orderId === orderId);
}

export function searchOrder(orderId){
  return orders.find(order => order.orderId === orderId);

}

export function updateItemQuantity(orderDetail){
  const order = searchOrder(orderDetail.orderId);
  if(order){
    const item = order.orderDetails.find(orderDetail => orderDetail.itemCode === orderDetail.itemCode);
    if(item){
      item.qty = orderDetail.qty;
      return true;
    }
  }
  return false;
}

