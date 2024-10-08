import BlogPage from "./pages/BlogPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import HomePage from "./pages/HomePage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import SinglePage from "./pages/SinglePage.vue";

export const routes = [
  {path: '/', component: HomePage},
  {path: '/blog', component: BlogPage},
  {path: '/contact', component: ContactPage},
  {path: '/single', component: SinglePage},
  {path: '/404', component: NotFoundPage}
]