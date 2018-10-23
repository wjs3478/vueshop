import Vue from 'vue'
import Router from 'vue-router'
import mainPage from "../pages/mainPage.vue"
import itemPage from "../pages/itemPage.vue"
import cartPage from "../pages/cartPage.vue"



//뷰라우터 사용
Vue.use(Router)

//라우터 설정
export const router= new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "main"
            }
        },
        {
            path: "/main",
            name: "main",
            component: mainPage
        },
        {
            path: "/item",
            name: "item",
            component: itemPage
        },
        {
            path: "/cart",
            name: "cart",
            component: cartPage
        }
        
    ]
})