import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import StopWatch from './components/StopWatch';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'/calendar',
          element:<Calendar/>
        },
        {
          path:'/dashboard',
          element:<Dashboard/>
        },
        {
          path:'/report',
          element:<Report/>
        }
      ]
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
