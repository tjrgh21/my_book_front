import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const getCookie = (name, options = null) => {
  const value = window.document.cookie.match(
    '(^|;) ?' + name + '=([^;]*)(;|$)'
  );
  return value ? decodeURIComponent(value[2]) : null;
};

function App() {
  const [test, setTest] = useState('');

  useEffect(() => {
    (
      async () => {
        try {
          const result = await fetch('http://localhost:3333/user/signup', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              Accept: 'application/json',
              mode: 'no-cors',
              'Access-Control-Allow-Origin': '*',
              // 'Content-Type': 'application/json'
            },
          });
          const data = await result.json();
          console.log(data);
          setTest(data.data)
        } catch (err) {
          setTest("has error")
        }
      }
    )();
  }, [])

  return (
    <div className="App">
      {test}
    </div>
  );
}

export default App;
