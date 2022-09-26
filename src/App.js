import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { privateRoutes , authRoutes } from "./config/routes";
import DefaultLayout from "./components/common/defaultLayout";
import SidebarLayout from "./components/common/sidebarLayout";
import Page404 from "./components/errors/page404";

function App() {
  const authUser = useSelector(state => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        {authRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={
            <DefaultLayout>
              <Page />
            </DefaultLayout>
          } />;
        })}

        {authUser && privateRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={
            <SidebarLayout>
              <Page />
            </SidebarLayout>
          } />;
        })}

        <Route path="404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
