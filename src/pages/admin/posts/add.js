import axios from "axios";
import { add } from "../../../api/posts";

const AddPost = {
    render(){
        return /*html*/`
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="<?= BASE_URL ?>dashboard">GOKY</a>
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
            <h1 class="h2">Thêm Tin Tức</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">             
              </div>
            </div>
             
          </div>
          
          <form id="formAddPost">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">  
              <div class="col-span-3 sm:col-span-2">
                <label for="about" class="block text-sm font-medium text-gray-700">
                  Titel
                </label>
                  <div class="mt-1 flex rounded-md shadow-sm">                  
                    <input  type="text" id="title-post" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="title-post">
                  </div>                
              </div>

              <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
              <div class="mt-1">
                <textarea id="desc-post" name="" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Mô tả bài viết"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500"></p>

  
              <div>
                <label class="block text-sm font-medium text-gray-700">
                  image
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <input type="file" id="img-post" class="border border-black" placeholder="Upload a file" /><br />
                        <img src="" id="img-preview"/>
                      </label>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Tạo bài viết</button>
          </div>
          </div>
        </form>

        </main>
            
        `
    },
    afterRender(){
        const formAddPost = document.querySelector('#formAddPost');
        const CLOUDINARY_PRESET_KEY = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formAddPost.addEventListener('submit', async function(e){
            e.preventDefault();

            const file = document.querySelector('#img-post').files[0];

            // lấy giá trị của file và gán vào object formData
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_PRESET_KEY);

            // call API cloudinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            })

            // call api thêm bài viết
            add({
                title: document.querySelector('#title-post').value,
                img: data.url,
                desc: document.querySelector('#desc-post').value,
            });
        })
    }
}
export default AddPost;