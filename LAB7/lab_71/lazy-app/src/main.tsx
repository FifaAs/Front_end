import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Settings  = lazy(() => import('./components/Settings'))
const Profile   = lazy(() => import('./components/Profile'))


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true,      element: <Dashboard /> },
      { path: 'settings', element: <Settings />  },
      { path: 'profile',  element: <Profile />   },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)