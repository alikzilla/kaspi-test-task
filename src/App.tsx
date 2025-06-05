import { Routes, Route } from "react-router";
import { Header } from "./components/common";
import { Shop } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Shop />} />
        {/* <Route path="bills" />
        <Route path="deposits" />
        <Route path="redAndKredit" />
        <Route path="installmentPlan" />
        <Route path="messages" /> */}
      </Routes>
    </div>
  );
}

export default App;
