import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="">
        <head>
            <style>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
            </style>
        </head>
      <Navbar />
    </div>
  );
}

export default App;
