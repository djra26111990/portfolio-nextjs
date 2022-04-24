import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
