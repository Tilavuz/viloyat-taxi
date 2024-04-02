import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
import RootLayout from "./layouts/root-layout";
const LoginLayout = lazy(() => import("./layouts/login-layout"))
// Pages
const Home = lazy(() => import("./pages/home"));
const Error =lazy(() => import("./pages/error"));
const Taxis = lazy( () => import("./pages/taxis"));
const About = lazy(() => import("./pages/about"));
const Passenger =lazy(() => import("./pages/passenger"))
const Login = lazy(() => import("./pages/login"))
const UserProfile = lazy(() => import("./pages/user-profile"))

// Loader components
import Loader from "./components/loader/loader";



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <Suspense fallback={<Loader />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: '/taxis',
        element: (
          <Suspense fallback={<Loader />}>
            <Taxis />
          </Suspense>
          )
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        )
      },
      {
        path: '/passenger',
        element: (
          <Suspense fallback={<Loader />}>
            <Passenger />
          </Suspense>
        )
      },
      {
        path: '/profile',
        element: (
          <Suspense fallback={<Loader />}>
            <UserProfile />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loader />}>
        <LoginLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loader />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        )
      }
    ]
  }
])


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
