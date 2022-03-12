import { render } from "react-dom";
import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AppLayout } from "./layouts/appLayout";
import { QRCodes } from "./routes/qrCodes";
import { QRCode } from "./components/qrCode"

const rootElement = document.getElementById("root");
render(
  <>
    <ChakraProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} >
            <Route path="codes" element={<QRCodes />}>
              <Route path=":codeId" element={<QRCode />} />
              <Route
                index
                element={
                  <main style={{ padding: "1 rem" }}>
                    <p>No QR code selected</p>
                  </main>
                }
              />

            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1 rem" }}>
                  <p>404</p>
                  <p>Page not found</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider >
  </>,
  rootElement);
