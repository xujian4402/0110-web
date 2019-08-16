/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const maintainRouter = {
  path: '/maintain',
  component: Layout,
  redirect: '/maintain/customer',
  name: 'Maintain',
  alwaysShow: true,
  meta: {
    roles: ['admin'],
    title: 'Maintain',
    icon: 'message'
  },
  children: [
    {
      path: 'staff',
      component: () => import('@/views/maintain/staff'),
      name: 'Staff',
      meta: { roles: ['admin'], title: 'staff' }
    },
    {
      path: 'customer',
      component: () => import('@/views/maintain/customer'),
      name: 'Customer',
      meta: { roles: ['admin'], title: 'customer' }
    },
    {
      path: 'staffDuties',
      component: () => import('@/views/maintain/staffDuties'),
      name: 'StaffDuties',
      meta: { roles: ['admin'], title: 'staffDuties' }
    },
    {
      path: 'auth',
      component: () => import('@/views/maintain/auth'),
      name: 'Auth',
      meta: { roles: ['admin'], title: 'auth' }
    },
    {
      path: 'sysParam',
      component: () => import('@/views/maintain/sysParam'),
      name: 'SysParam',
      meta: { roles: ['admin'], title: 'sysParam' }
    }
  ]
}

export default maintainRouter
