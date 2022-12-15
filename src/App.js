import './App.css';
import {useState} from "react";
import { QRCodeSVG } from 'qrcode.react';
import pic from "./cat.png";

function App() {
  const [qrCode,setQrCode] = useState();
  return (
    <div className="App">
    <div className="container">
    <h1>Enter the URL</h1>
    
    <input type="text" placeholder="Enter web" 
    onChange={(e)=>{
      setQrCode(e.target.value)
    }}
    />
    
    {qrCode ? <QRCodeSVG className="qr" value={qrCode}  /> : <img src={pic}/>  }
    {!qrCode &&  <h1><span class="material-symbols-outlined">
qr_code_scanner
</span></h1>}
    </div>
    </div>
  );
}

export default App;
