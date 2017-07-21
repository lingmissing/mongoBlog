import PageLayout from 'root/layouts/PageLayout/PageLayout'
import HomeView from 'routes/HomeView'
import AddArtical from 'routes/AddArtical'
import BlogArtical from 'routes/BlogArtical'
import BlogLinks from 'routes/BlogLinks'
export const createRoutes = store => [
  {
    path: '/archives',
    component: PageLayout,
    indexRoute: BlogArtical(store),
    childRoutes: [BlogLinks(store)]
  },
  HomeView(store),
  AddArtical(store)
]
export default createRoutes
