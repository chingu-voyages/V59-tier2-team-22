import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import ChatWidget from "../chat/ChatWidget";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-white shadow-sm">
        <Header />
      </header>
      <main className="container mx-auto px-4 py-4 grow">
        <Outlet />
      </main>
      <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
        <Footer />
      </footer>

      {/* Global Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default Layout;
