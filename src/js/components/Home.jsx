import React, { useState, useEffect } from 'react';
import Contador from './Contador.jsx';

function Home() {
  const [seconds, setSeconds] = useState(0);
  const [mode, setMode] = useState('normal');
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prev => {
          if (mode === 'countdown') {
            if (prev > 0) return prev - 1;
            setIsRunning(false);
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, mode]);

  const parar = () => setIsRunning(false);
  const reanudar = () => setIsRunning(true);
  const reiniciar = () => {
    setSeconds(0);
    setIsRunning(false);
  };
  const cuentaRegresiva = () => {
    setSeconds(10);
    setMode('countdown');
    setIsRunning(true);
  };
  const modoNormal = () => {
    setSeconds(0);
    setMode('normal');
    setIsRunning(true);
  };

  return (
    <div className="container text-center mt-5">
      <Contador seconds={seconds} />
      <div className="btn-group mt-4">
        <button className="btn btn-danger" onClick={parar}>Parar</button>
        <button className="btn btn-success" onClick={reanudar}>Reanudar</button>
        <button className="btn btn-warning" onClick={reiniciar}>Reiniciar</button>
        <button className="btn btn-info" onClick={cuentaRegresiva}>Cuenta Regresiva (10s)</button>
        <button className="btn btn-secondary" onClick={modoNormal}>Contador Normal</button>
      </div>
    </div>
  );
}

export default Home;