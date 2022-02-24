import axios from 'axios';
import { getAll } from '../../api/products';
import Header from '../../components/header';
import { addToCart } from "../../utils/cart";
import { $ } from "../../utils/selector";


const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div> 
                <div id="header">
                    ${Header.render()}
                </div>
                <div  class="max-w-5xl mx-auto">
                <div class="my-3">
                        <img src="https://img.jamja.vn/jamja-prod/gcs_full_59bc0ecf76ec571263f90468-2017-09-15-173304.png?cache=1" />
                </div>
                <div class="news">
                    <h2 class="text-2xl font-semibold my-4">Sản phẩm</h2>
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                            <div class="border p-4">
                                <a href="/products/${post.id}">
                                    <img src="${post.img}" alt="" />
                                </a>
                                <h3 class="my-3"><a  href="/products/${post.id}"class="font-semibold text-lg text-orange-500">${post.name}</a></h3>
                                
                                <p>${post.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                                <p>
                                    Số Lượng: <input type="number" id="inputValue"class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                                    <button id="btnAddToCart" class="btn btn-danger w-100"> Add To Cart</button>
                                </p>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
            
        </div>
        `;
    },
    afterRender(){
        $('#btnAddToCart').addEventListener('click', async function(){
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: $("#inputValue").value ? $("#inputValue").value : 1})
        })
        Header.afterRender()
    }
};

export default ProductsPage;