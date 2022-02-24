import { reRender } from "../utils/rerender";

const Nav = {
    render() {
        return /* html */`
        <nav class="flex items-center justify-between">
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-black ">Trang chủ</a></li>
                <li><a href="/about" class="block py-3 px-4 text-black ">Blog</a></li>
                <li><a href="/products" class="block py-3 px-4 text-black ">Sản phẩm</a></li>
                <li><a href="cart" class="block py-3 px-4 text-black ">Giỏ hàng</a></li>
            </ul>
            ${localStorage.getItem('user') ? `<ul class="flex - right-0">
            <li class="flex items-center">Xin chao <span class="block py-3 px-4 text-black" id="email">datlt</span></li>
            <li><a class="block py-3 px-4 text-black " id="logout">Logout</a></li>
        </ul>`: ""}
            
        </nav>`;
    },
    afterRender(){
        const email = document.querySelector('#email');
        const logout = document.querySelector('#logout');
        if(email){
            email.innerHTML = JSON.parse(localStorage.getItem('user')).email;
        }
        if(logout){
            logout.addEventListener('click', function(){
                localStorage.removeItem('user');
                reRender(Nav, "#main-menu");
            });
        }
        
    }
};
export default Nav;