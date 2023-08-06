import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import DefaultLayout from "../Layout/DefaultLayout";
import Collections from "../components/Client/Collections/Collections";
import Contact from "../components/Client/Contact/Contact";
import Home from "../components/Client/Home/Home";
import Introduction from "../components/Client/Introduction/Introduction";
import PostDetail from "../components/Client/PostDetail/PostDetail";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";

import ContentLayout from "../Layout/ClientLayout/ContentLayout";
import ClientLayout from "../Layout/ClientLayout/ClientLayout";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: DefaultLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: AdminLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: ContentLayout,
  },
  {
    path: "/lien-he",
    component: Contact,
    Layout: ContentLayout,
  },
  {
    path: "/gioi-thieu",
    component: Introduction,
    Layout: ContentLayout,
  },
  {
    path: "/collection/:id",
    component: Collections,
    Layout: ContentLayout,
  },
  {
    path: "/post/:id",
    component: PostDetail,
    Layout: ContentLayout,
  },
];
