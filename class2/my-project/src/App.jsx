import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/by/Navbar'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Mail from './components/Mail'
import Box from './components/Box'
import SendMail from './components/SendMail'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import store from './redux/Store'


const router = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <Box />,

    },
    {
      path: "/mail/:id",
      element: <Mail />
    },
  ]
}
])
function App() {
  const {user} = useSelector(store=>store.AppSlice);



  return (
    
      <div className='bg-[#F6F8FC]h-screen w-screen overflow-hidden'>
      {
        !user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <RouterProvider router={router} />
            <div className='absolute w-75 p-5 bottom-0 right-20 z-20'>{/*w[50%] */}
              <SendMail />
            </div>
          </>
        )
      }


    </div>
  )
}

export default App
