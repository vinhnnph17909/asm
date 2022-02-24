import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header>
        <div class="bg-white-800 py-4 border">
        <img src="https://img.jamja.vn/jamja-prod/gcs_full_59bc0ecf76ec571263f90460-2017-09-15-173304.png?cache=1&w=150" class="mx-auto" width="100" height="100" alt="">
    </div>  
            <div class="bg-light" id="main-menu">
                ${Nav.render()}
            </div>
        </header>`;
    },
    afterRender(){
      Nav.afterRender();
    }
};
export default Header;