import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Support from './pages/Support/Support'
import Transaction from './pages/Transaction/Transaction'
import Signup from './pages/Auth/Singup/Signup'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Signin from './pages/Auth/Signin/Signin'
import RegisterEmailverify from './pages/Auth/RegisterEmailVerify/RegisterEmailverify'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Transaction",
    element: <Transaction />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
  {
    path:"/Signup",
    element:<Signup />
  },
  {
    path:"/Signin",
    element:<Signin />
  },
  {
    path:"/RegEmail",
    element:<RegisterEmailverify />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

