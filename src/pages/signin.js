import { signin } from "../api/user";
import { $ } from "../utils/selector";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signin = {
    render(){
        return /* html*/`
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://img.jamja.vn/jamja-prod/gcs_full_59bc0ecf76ec571263f90460-2017-09-15-173304.png?cache=1&w=150" alt="" width= "800px" height= "800px">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
                </h2>
            </div>
            <form id="formSignin" class="mt-8 space-y-6">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="email" placeholder="Email address">
                </div>
                <div>
                    <label for="password" class="sr-only">Password</label>
                    <input type="password"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="password" placeholder="Password">
                </div>
                </div>
        
                <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                    Ghi nhớ đăng nhập
                    </label>
                </div>
        
                <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Quên mật khẩu?
                    </a>
                </div>
                </div>
        
                <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <!-- Heroicon name: solid/lock-closed -->
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    </span>
                    Đăng nhập
                </button>
                </div>
                <div class="text-sm">
                    Nếu bạn chưa có tài khoản. Vui lòng đăng ký
                    <a href="/signup" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Tại đây?
                    </a>
                </div>
            </form>          
            </div>
            </div>
            
        `
    },
    afterRender(){
        $('#formSignin').addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                // call api, nếu đăng nhập thành công sẽ trả về object data
                const { data } = await signin({
                    email: $('#email').value,
                    password: $('#password').value,
                });
                localStorage.setItem('user', JSON.stringify(data.user));
                toastr.success("Đăng nhập thành công, chuyển trang sau 2s")
                setTimeout(function(){
                    if(data.user.id === 1){
                        document.location.href="/#/admin"
                    } else {
                        document.location.href="/#/"
                    }
                },2000)
                
            } catch (error) {
                // nếu lỗi thì trả về object chứa lỗi error.response.data
                toastr.success(error.response.data)
                $('#formSignin').reset()
            }
            
        })
    }
}
export default Signin;