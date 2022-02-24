import { signup } from "../api/user";
import { $ } from "../utils/selector";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signup = {
    render(){
        return /*html*/`
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://img.jamja.vn/jamja-prod/gcs_full_59bc0ecf76ec571263f90460-2017-09-15-173304.png?cache=1&w=150" alt="" width= "800px" height= "800px">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign up
                </h2>
            </div>
            <form id="formSignup" class="mt-8 space-y-6">
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
        
                
        
                
        
                <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <!-- Heroicon name: solid/lock-closed -->
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    </span>
                    Đăng ký
                </button>
                </div>
                
            </form>          
            </div>
            </div>
            
        `
    },
    afterRender(){
        $('#formSignup').addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: $('#email').value,
                    password: $('#password').value,
                });
                toastr.success("Đăng ký thành công")
                if(data){
                    setTimeout(function(){
                        document.location.href="/signin"
                    },2000);
                }
                
            } catch (error) {
                toastr.error(error.response.data)
                $('#formSignup').reset()
            }
           

        })
    }
}
export default Signup;