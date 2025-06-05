import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Sidebar } from "./components/common";
import { Shop } from "./pages";

function App() {
  return (
    <div>
      <Header />

      <section className="py-8 px-10 flex items-start justify-start gap-5">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Navigate to="/shop" replace />} />

          <Route path="shop" element={<Shop />} />
          <Route path="shop/orders" element={<div>Orders Page</div>} />
          <Route path="shop/delivery" element={<div>Delivery Info</div>} />
          <Route path="shop/products" element={<div>Product List</div>} />

          <Route path="bills" element={<div>Bills Page</div>} />
          <Route path="accounts" element={<div>Accounts Page</div>} />
          <Route path="deposits" element={<div>Deposits Page</div>} />
          <Route path="redAndKredit" element={<div>Red & Kredit</div>} />
          <Route path="installmentPlan" element={<div>Installment Plan</div>} />
          <Route path="messages" element={<div>Messages</div>} />

          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
