import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { AlertProvider } from "./components/Alert";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logIn } from "./state/auth/authSlice";
import PropertiesShow from "./pages/Property/Show";
import PropertyNew from "./pages/Property/New";
import PropertiesSearch from "./pages/Property/Search";

function App() {
  const [lightMode, setLightMode] = useState(
    localStorage["darkMode"] === "true" ? true : false
  );

  const currentUser = useSelector((state) => state.auth.user);
  let dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!currentUser.id && token !== undefined) {
      fetch("http://localhost:3000/current_user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
        .then((response) => {
          if(response.ok){
            return response.json();
          }else{
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          dispatch(logIn(data));
        })
        .catch((err) => {
          console.error(err.message);
          Cookies.remove("token");
        });
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    lightMode
      ? document.body.classList.add("darkmode")
      : document.body.classList.remove("darkmode");
    localStorage["darkMode"] = lightMode;
  }, [lightMode]);

  return (
    <BrowserRouter>
      <Navbar mode={lightMode} onSwitchChange={setLightMode} />

      <main id="main" className="min-h-[88vh] mt-[7vh] relative flex">
        <AlertProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/properties/:id" element={<PropertiesShow />} />
            <Route path="/properties/search/:city" element={<PropertiesSearch />} />
            <Route
              path="/property/new"
              element={
                <PrivateRoute>
                  <PropertyNew />
                </PrivateRoute>
              }
            />
            <Route path="/properties/:id" element={<PropertiesShow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AlertProvider>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
