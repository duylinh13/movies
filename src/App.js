import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import SettingPage from "./pages/SettingPage/SettingPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import PopularPage from "./pages/PopularPage/PopularPage";
import TopRatedPage from "./pages/TopRatedPage/TopRatedPage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import GenrePage from "./pages/GenrePage/GenrePage";
import LikePage from "./pages/LikesPage/LikesPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import ShowsPage from "./pages/ShowsPage/ShowsPage";
import ForyouPage from "./pages/ForyouPage/ForyouPage";
import MemberPage from "./pages/MemberPage/MemberPage";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { createContext, useState } from "react";
import FavoritePage from "./pages/FavoritesPage/FavoritesPage";

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const signOut = () => {
    setIsLoggedIn(false);
  };
  const logIn = () => {
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        signOut,
        logIn,
      }}
    >
      <div className="app">
        {isLoggedIn && <SideBar signOut={signOut} />}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/settings" element={<SettingPage />} /> */}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
            <Route path="*" element={<SettingPage />} />
            <Route path="/toprated" element={<TopRatedPage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/genre" element={<GenrePage />} />
            <Route path="/like" element={<LikePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/show" element={<ShowsPage />} />
            <Route path="/foryou" element={<ForyouPage />} />
            <Route path="/member" element={<MemberPage />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
/*
  Homepage:       /
  Login:          /login
  Signup          /signup
  Movie Detail    /movies/:id
  Page not found  /đường-dẫn-còn-lại
*/
