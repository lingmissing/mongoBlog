import PageLayout from 'root/layouts/PageLayout/PageLayout'
import Home from 'routes/Home'
import AddArtical from 'routes/AddArtical'
import BlogArtical from 'routes/BlogArtical'
import BlogLinks from 'routes/BlogLinks'
export const createRoutes = store => [
  {
    path: '/',
    component: PageLayout,
    indexRoute: Home,
    childRoutes: [BlogArtical(store), BlogLinks(store)]
  },
  AddArtical(store)
]
export default createRoutes
