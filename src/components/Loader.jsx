import { useState } from 'react';
import './Loader.css'
const Loader = () => {
    let greeting = ["we're preparing the coffee","Quote changes every 30sec"];
    let randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];
    const [greet] = useState(randomGreeting);


    return ( 
        <div className="loader">
            <div className="preloader"></div>
            <div className="loading">{greet}</div>

        </div>
     );
}
 
export default Loader;