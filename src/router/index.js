import {createRouter,createWebHashHistory} from 'vue-router'
import Home from "@/page/HoMe";
import HelloWorld from "@/page/HelloWorld";
const router = createRouter(
    {
        history:createWebHashHistory(),
        routes:[{
          path: '/',
          redirect: '/helloWorld'
        },{
          path: '/home',
          component: Home,
          meta: {
            isAuth: true,
            title: '首页'
          }
        },{
          path: '/helloWorld',
          component: HelloWorld,
          meta: {
            isAuth: false,
            title: 'hello'
          }
        }],
    }
)
router.beforeEach((to, from, next) => {
  if(to.meta.isAuth) {
    console.log('注册页面路由守卫')
    next()
    return
  }
  console.log(from)
  next()
})
export default router