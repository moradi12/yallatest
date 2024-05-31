import { MainRoute } from "../../Route/MainRoute/MainRoute";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Menu } from "../Menu/Menu";
import "./MainLayout.css";
import axios from "axios";
export function MainLayout(): JSX.Element {
    axios.defaults.baseURL = 'http://localhost:8080';
    return (
        <div className="MainLayout">
			<header>
                <Header/>
            </header>
            <div style={{padding:50}}>
                <Menu/>
                </div>
            <main>
                <MainRoute/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
