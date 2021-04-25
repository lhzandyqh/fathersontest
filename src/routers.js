import homePage from '@/components/homePage'
import aboutUs from '@/components/aboutUs'
import contactWay from '@/components/contactWay'
import newsPage from '@/components/newsPage'

/* eslint-disable */
const routers = [
  // eslint-disable-next-line
  {
    path: '/',
    component: homePage
  },
  {
    path: '/aboutus',
    component: aboutUs
  },
  {
    path: '/contactway',
    component: contactWay
  },
  {
    path: '/newspage',
    component: newsPage
  }
]
export default routers
