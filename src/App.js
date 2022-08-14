import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "./App.css";
import Home from "./pages/home/home";
import Partners from "./pages/partners/partners";

function App() {
  return (
    <div className="">
      <head>
        <title>INSL | 2022 | Web Portal</title>
        <style>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </style>
      </head>

      <MessengerCustomerChat
        pageId="2047005378906480"
        appId="1436137633526748"
      />

      <Router>
        <Routes>
          
          <Route path="/partners" element={<Partners />} />
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
