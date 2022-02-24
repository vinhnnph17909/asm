import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/rerender";
import { $ } from "../utils/selector";
import toastr from "toastr";
import Footer from '../components/footer';
import Header from '../components/header';
import "toastr/build/toastr.min.css";

const OrderPage = {
    render(){
        let cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            return /* html */`
                <div id="header">
                    ${Header.render()}
                </div>
                <div class="table-responsive">
                        <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>                                
                                <th>Giá sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                                ${cart.map(item => `
                                    <tr>
                                        <td>${item.name}</td>                                       
                                        <td>${item.price}</td>
                                        <td>
                                            <button data-id="${item.id}" class="btn btn-increase">+</button>
                                            ${item.sl}
                                            <button data-id="${item.id}" class="btn btn-decrease">-</button>
                                        </td>
                                        <td>
                                            <button data-id="${item.id}" class="btn btn-remove">Remove</button>
                                        </td>
                                    </tr>
                                `).join("")}
                        </tbody>
                    </table>
                    <button class="btn btn-danger w-100">Đặt hàng</button>
                <div>
                
                <div id="footer">
                    ${Footer.render()}
                </div>
            `
        } else {
            return `No Item`
        }
        
    },
    afterRender(){
        Header.afterRender()
        Footer.afterRender()
    }
};
export default OrderPage;