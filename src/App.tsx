import { Feed } from "./components/Feed";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Feed />
      <Footer />
      <GlobalStyle />
    </>
  );
}