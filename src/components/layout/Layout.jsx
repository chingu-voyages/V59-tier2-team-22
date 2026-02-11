import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className="bg-white shadow-sm">
        <Header />
      </header>
      <main className="flex-1 container mx-auto px-4 py-4">
        <Outlet />
      </main>
      <footer className="bg-gray-100 border-gray-200">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
