import { createBrowserRouter, Outlet } from 'react-router-dom';
import LayoutDefault from '../layout/LayoutDefault';
import HomePage from '../pages/home/HomePage';

export default createBrowserRouter([
  {
    element: (
      <LayoutDefault>
        <Outlet />
      </LayoutDefault>
    ),
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
]);
