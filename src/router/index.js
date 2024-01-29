import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/login";

// Массив из маршрутов (только для авторизованных пользователей)
export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
]

// доступны для впервые зашедших в приложение
export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]