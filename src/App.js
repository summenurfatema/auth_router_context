
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import PrivateRoute from './components/route/PrivateRoute';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/home', element: <Home></Home>
        },
        {
          path: '/login', element: <Login></Login>
        },
        {
          path: '/orders', element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: '/register', element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
