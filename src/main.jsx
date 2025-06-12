import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskPage from './pages/taskPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/task",
    element: <TaskPage />,
  }
]);

// essas linhas inserem no React o html, por meio do javascript.(single page aplication)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
// um componente sempre é renderizado com letra maiuscula