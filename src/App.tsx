import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Sidebar } from "./components/common";
import { Shop } from "./pages";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="md:pl-10 flex flex-1 overflow-hidden pt-8">
        <Sidebar />

        <main className="flex-1 overflow-y-auto pb-10">
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
            <Route
              path="installmentPlan"
              element={<div>Installment Plan</div>}
            />
            <Route path="messages" element={<div>Messages</div>} />

            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
