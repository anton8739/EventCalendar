import './Layout.scss'
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import AppRouter from "../router/AppRouter";
const Layout = () => {

    return (<div className="layout">
        <Header/>
        <Content>
            <AppRouter/>
        </Content>
        <Footer/>
    </div>)

}
export default Layout;