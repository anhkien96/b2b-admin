// import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global/css/index.css';
import Main from './pages/_layout/Main';

import IRoute from './global/routes/iRoute';
import { userRoutes } from './global/user';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);


const createRoutes = (routes: Array<IRoute>) => {
   let result: Array<any> = [];
   routes.forEach((r: IRoute) => {
      if (!r.userHide) {
         if (r.children && r.children.length) result = result.concat(createRoutes(r.children));
         else result.push(<Route key={r.path} path={r.path} element={r.page}></Route>);
      }
   });
   return result;
};

const routeList = createRoutes(userRoutes);

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Main />}>
               {routeList}
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
