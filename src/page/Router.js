import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/index'
import Main from './main/index'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;