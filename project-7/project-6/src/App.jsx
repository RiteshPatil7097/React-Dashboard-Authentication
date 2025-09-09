import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Support from './pages/Support/Support'
import Transaction from './pages/Transaction/Transaction'
import Signup from './pages/Auth/Singup/Signup'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Signin from './pages/Auth/Signin/Signin'
import RegisterEmailverify from './pages/Auth/RegisterEmailVerify/RegisterEmailverify'
import SuccessReg from './pages/Auth/Success/SuccessReg'
import Forgot from './pages/Auth/ForgotPassword/Forgot'
import SuccessSent from './pages/Auth/SuccessSent/SuccessSent'
import ResetPassDone from './pages/Auth/ResetPasswordDone/ResetPassDone'
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"

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
  },
  {
    path:"/Success",
    element:<SuccessReg />
  },
  {
    path:"/Forgot",
    element:<Forgot />
  },
  {
    path:"/SuccessSent",
    element:<SuccessSent />
  },
  {
    path:"/ResetPassDone",
    element:<ResetPassDone />
  },
  {
    path:"/ResetPassword",
    element:<ResetPassword />
  }
]);

function App() {
  const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App

