import {BrowserRouter, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
function App() {
    return (
        
            <BrowserRouter>
                <div>
                    
                </div>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/posts">
                    <Posts/>
                </Route>
            </BrowserRouter>
    )
}
export default App;