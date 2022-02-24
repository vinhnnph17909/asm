import { get } from "../api/posts";
import Footer from '../components/footer';
import Header from '../components/header';

const NewsDetail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div>
            <div id="header">
                ${Header.render()}
            </div>
            <div class="container mt-5">
            <div class="max-w-5xl mx-auto">
                <div class="col-lg-8">
                    <!-- Post content-->
                    <article>
                        <!-- Post header-->
                        <header class="mb-4">
                            <!-- Post title-->
                            <h1 class="fw-bolder mb-1">${data.title}</h1>
                        </header>
                        <!-- Preview image figure-->
                        <figure class="mb-4"><img src="${data.img}" /></figure>
                        <!-- Post content-->
                        <section class="mb-5">
                            <p>${data.desc}</p>
                        </section>
                    </article>
                    <!-- Comments section-->
                    <section class="mb-5">
                        <div class="card bg-light">
                            <div class="card-body">
                                <!-- Comment form-->
                                <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                <!-- Comment with nested comments-->
                                <div class="d-flex mb-4">
                                    <!-- Parent comment-->
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">VinhNguyeenx</div>
                                            àasgfhfgjfg
                                        <!-- Child comment 1-->
                                        <div class="d-flex mt-4">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Quân</div>
                                                mvllsdfnjr23
                                            </div>
                                        </div>
                                        <!-- Child comment 2-->
                                        <div class="d-flex mt-4">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Minh</div>
                                                gfkdnlvsekrei43
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Single comment-->
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Tiến</div>
                                        fdglnvldflkekrlw
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>               
            </div>
        </div>       
        `;
    },
    afterRender(){
        Header.afterRender()
        Footer.afterRender()
    }
};
export default NewsDetail;