import axios from 'axios';
import { reRender } from '../../../utils/rerender';
import { getAll, remove } from '../../../api/products';

const AdminProduct = {
    async render() {
        const { data } = await getAll();
        
        return /* html */`
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">GOKY</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
            </li>
        </ul>
        </nav>
        <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="sidebar-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/admin/news">
                  Quản lý Tin Tức
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/admin/product">
                  Quản lý Sản phẩm
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/signin">
                Sign out
                </a>
              </li>
              
            </ul>
            </ul>
          </div>
        </nav>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Quản lý Sản phẩm</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">              
              </div>
            </div> 
          </div>
          
          <div class="table-responsive"> 
            
          <div class="news">
              <a href="/admin/product/add"class="btn btn-success">Tạo mới</a>
              <table class="table table-striped table-sm">
                <thead>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Ảnh</th>
                    <th>Giá</th>
                    <th>Hành Động</th>
              
                </thead>
                  <tbody>
                      ${data.map((product, index) => `
                          <tr>
                              <td>${index + 1}</td>
                              <td>${product.name}</td>
                              <td>${product.img}</td>
                              <td>${product.price}</td>
                              <td>
                                  <button data-id="${product.id}" class="btn">edit</button>
                                  <button data-id="${product.id}" class="btn">Remove</button>
                              </td>
                              <td>
                                  
                              </td>
                          </tr>
                      `).join("")}    
                  </tbody>
              </table>
              
          </div>
      </div>

        </main>
        
        `;
    },
    afterRender(){
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function(){
                const confirm = window.confirm("Bạn có chắc chắn không??");
                if(confirm){
                    remove(id).then(() => {
                        reRender(AdminProduct, '#content');
                    })
                }
            })
        });
    }
};

export default AdminProduct;