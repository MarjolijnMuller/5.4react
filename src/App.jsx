import React, {useState} from 'react';
import './App.css';


function App() {
    const [light, setLight] = useState(0);
    return (
        <main className={light === true ? 'on' : 'off'}>
            <section>
                <div className="dot"></div>
                <button type="button"
                        onClick={() => light
                            ? setLight(false)
                            : setLight(true)}
                >
                    {light ? "Turn off" : "Turn on"}
                </button>
            </section>
        </main>
    );
}

export default App;
