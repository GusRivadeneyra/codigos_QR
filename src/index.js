import { render } from "react-dom";
import { 
         BrowserRouter, 
         Routes, 
         Route, 
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import {Invoices, Invoice} from "./routes/invoices";
import QRCode from "react-qr-code";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="expenses" element={<Expenses />}/>
      <Route path="contacto" element={<Expenses />}/>
      <Route path="invoices" element={<Invoices />}>
        <Route
         index
         element={
          <main style={{ padding: "1 rem"}}>
            <p>Select an invoice</p>
          </main>
         }
         />
        <Route path=":invoiceID" element={<Invoice/>}/>
        </Route>
      <Route
       path="*"
       element={
         <main style={{ padding: "1 rem"}}>
           <p> Hi, there´s nothing here</p>
         </main>
       }
       />
    </Routes>
    <div style={{ gap: '5em', display: "flex", marginTop: 20 }}>
    <QRCode value="Domenicos" size={256} bgColor="#282c34" fgColor="#fff" level="H"  />
    <QRCode value="Monty" size={256} bgColor="#282c34" fgColor="#fff" level="H"  />
    </div>
  </BrowserRouter>,
  rootElement,
  
);
