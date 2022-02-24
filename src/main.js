import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard/dashboard";
import AdminPost from "./pages/admin/posts";
import AddPost from "./pages/admin/posts/add";
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/products/detail";
import AdminProduct from "./pages/admin/products";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import AddProduct from "./pages/admin/products/add";
import EditPostPage from "./pages/admin/posts/edit";
import OrderPage from "./pages/order";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.getElementById("content").innerHTML = await content.render(id);

  if(content.afterRender) content.afterRender(id);
};


router.on('/admin/*/',  () => {
  console.log('truy cap duong dan admin/*')
}, {
  before(done, match) {
      if(localStorage.getItem('user')){
        const userId = JSON.parse(localStorage.getItem('user')).id;
        if(userId == 1){
            done();
        } else {
            document.location.href="/"
        }
      } else{
        document.location.href="/"
      }
    
  },
});

router.on({
  "/": () => {
    print(HomePage);
  },
  "/home/:id": ({ data }) => {
    const { id } = data;
    print(ProductDetailPage, id);
  },
  "/about": () => {
    print(AboutPage);
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(NewsDetail, id);
  },
  "/products": () => print(ProductsPage),
  "/products/:id": ({ data }) => {
    const { id } = data;
    print(ProductDetailPage, id);
  },
  "/admin": () => print(Dashboard),
  "/admin/news": () => print(AdminPost),
  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    print(EditPostPage, id);
  },
  "/admin/product": () => print(AdminProduct),
  "/products/cart": () => print(CartPage),
  "/admin/news/add": () => print(AddPost),
  "/admin/product/add": () => print(AddProduct),
  "/cart/order": () => print(OrderPage),
  "/signup": () => print(Signup),
  "/signin": () => print(Signin),
  "/cart": () => print(CartPage)
});

router.resolve();

