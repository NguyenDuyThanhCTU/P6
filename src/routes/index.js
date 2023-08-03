// import Login from "../components/Login/Login";
// import Admin from "../components/Admin/Admin";
// import DefaultLayout from "../Layout/DefaultLayout";
import Collections from "../components/Client/Collections/Collections";
import Contact from "../components/Client/Contact/Contact";
import Home from "../components/Client/Home/Home";
import Introduction from "../components/Client/Introduction/Introduction";
import PostDetail from "../components/Client/PostDetail/PostDetail";
// import AdminLayout from "../Layout/AdminLayout/AdminLayout";
// import Introduction from "../components/Client/Introduction/Introduction";
// import Contact from "../components/Client/Contact/Contact";
// import News from "../components/Client/News/News";
// import Designs from "../components/Client/Designs/Designs";
// import PostDesign from "../components/Client/Post/PostDesign";
// import PostDetail from "../components/Client/Post/PostDetail";
// import Construction from "../components/Client/Construction/Construction";
// import PostConstruction from "../components/Client/Post/PostConstruction";
import ClientLayout from "../Layout/ClientLayout/ClientLayout";
import ContentLayout from "../Layout/ClientLayout/ContentLayout";

export const AllRoutes = [
  // {
  //   path: "/login",
  //   component: Login,
  //   Layout: DefaultLayout,
  // },
  // {
  //   path: "/admin",
  //   component: Admin,
  //   Layout: AdminLayout,
  // },
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
  {
    path: "/lien-he",
    component: Contact,
    Layout: ClientLayout,
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
