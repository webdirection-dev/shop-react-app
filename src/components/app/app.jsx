import './app.css'
import Header from "../header"
import Footer from "../footer"
import Shop from "../shop"

import {ContextProvider} from "../../context";

function App() {
    return (
        <>
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </>
    );
}

export default App;


// Без Контекста
// import './app.css'
// import Header from "../header"
// import Footer from "../footer"
// import Shop from "../shop"
//
// function App() {
//     return (
//         <>
//             <Header />
//             <Shop />
//             <Footer />
//         </>
//     );
// }
//
// export default App;
