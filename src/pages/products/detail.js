import { get } from "../../api/products";
import Header from '../../components/header';
import { addToCart } from "../../utils/cart";
import { $ } from "../../utils/selector";


const ProductDetailPage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div id="header">
                    ${Header.render()}
                </div>
                <div class="container">
                <div class="max-w-5xl mx-auto">                
                    <div class="row m-0">
                        <div class="col-lg-4 left-side-product-box pb-3">
                            <img src="${data.img}" />                            
                        </div>
                        <div class="col-lg-8">
                            <div class="right-side-pro-detail border p-3 m-0">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h1>${data.name}</h1>
                                    </div>
                                    <div class="col-lg-12">
                                        <p>${data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                                        <hr class="p-0 m-0">
                                    </div>                                                                        
                                    <div class="col-lg-12">
                                        <h6>Quantity :</h6>
                                        <input type="number" class="form-control text-center w-100" value="1">
                                    </div>
                                    <div class="col-lg-12 mt-3">
                                        <div class="row">
                                            <div class="col-lg-6 pb-2">
                                                <button id="btnAddToCart" class="btn btn-danger w-100"> Add To Cart</button>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
            </div>       
        `;
    },
    afterRender(id){
        $('#btnAddToCart').addEventListener('click', async function(){
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: $("#inputValue").value ? $("#inputValue").value : 1})
        })
        Header.afterRender()
    }
};
export default ProductDetailPage;




