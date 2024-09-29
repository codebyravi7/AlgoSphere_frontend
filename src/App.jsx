import { Route, Routes, Navigate } from "react-router-dom";
import Topbar from "./components/topbar/Topbar.jsx";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useAuthContext } from "./context/AuthContext";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import QuesList from "./pages/coding/QuesList";
import EditPost from "./pages/edit/Editpost";
import SearchedBlog from "./pages/searchPage/Search";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import Error500 from "./pages/Error500"; // Your 500 error page
import ContestList from "./components/ContestList";

import { useEffect, useState } from "react";
import UserProfile from "./pages/UserProfile";
import useContests from "./hooks/useContests.js";
import useTheme from "./hooks/useTheme.js";
import useShowposts from "./hooks/useShowposts";
import AddProfile from "./pages/AddProfiles.jsx";

// axios.defaults.baseURL = "http://localhost:5000/api";

function App() {
  const { authUser } = useAuthContext();
  const { loading, error, contests, platforms, setPlatforms } = useContests();
  const { showPosts } = useShowposts();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await showPosts();
      setPosts(res || []);
    };
    fetchPosts();
  }, []);
  const { theme, setThemeMode } = useTheme();

  return (
    <div className="">
      <Topbar theme={theme} setThemeMode={setThemeMode} />

      <Routes>
        <Route
          path="/"
          element={
            authUser ? <Homepage posts={posts} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={authUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/add-profiles"
          element={authUser ? <AddProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/search/blog"
          element={authUser ? <SearchedBlog /> : <Navigate to="/login" />}
        />
        <Route
          path="/post/:id"
          element={authUser ? <Single /> : <Navigate to="/login" />}
        />
        <Route
          path="/write/:id/:qid"
          element={authUser ? <Write /> : <Navigate to="/login" />}
        />
        <Route
          path="/code"
          element={authUser ? <QuesList /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-post/:id"
          element={authUser ? <EditPost /> : <Navigate to="/login" />}
        />
        <Route
          path="/:id/profile"
          element={authUser ? <UserProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={authUser ? <Settings /> : <Navigate to="/login" />}
        />
        <Route
          path="/contest"
          element={
            <>
              {loading && <p className="text-center">Loading contests...</p>}
              {error && <p className="text-center text-red-600">{error}</p>}

              {!loading && (
                <ContestList
                  loading={loading}
                  error={error}
                  contests={contests}
                />
              )}
            </>
          }
        />
        {/* Error Pages */}
        <Route path="*" element={<Page404 />} />
        <Route path="/error500" element={<Error500 />} /> {/* 500 error page */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
