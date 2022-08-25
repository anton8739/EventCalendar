import {Menu} from "antd";
import type { MenuProps } from 'antd';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from 'react-router-dom';
import {useActions} from "../../hooks/useActions";
import {RouteNames} from "../../router";
interface MenuItem {
    key : string,
    onClick : Function
}
const Header = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    const navigate = useNavigate();
    const {logout} = useActions();
    const publicItems = [
        {
            key : "Home",
            onClick : () => navigate(RouteNames.HOME)
        },
        {
            key : "Login",
            onClick : () => navigate(RouteNames.LOGIN)
        }
    ]
    const privateItems = [
        {
            key : "Home",
            onClick : () => navigate(RouteNames.HOME)
        },
        {
            key : "Event",
            onClick : () => navigate(RouteNames.EVENT)
        },
        {
            key : "Logout",
            onClick : () => logout()
        }
    ]
    const publicNavbar: MenuProps['items'] = publicItems.map((item:MenuItem) => ({
        key: item.key,
        label: `${item.key}`,
        onClick :  () => item.onClick()
    }));
    const privateNavbar: MenuProps['items'] = privateItems.map((item:MenuItem) => ({
        key: item.key,
        label: `${item.key}`,
        onClick : () => item.onClick()
    }));
    return <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={isAuth ? privateNavbar : publicNavbar}  className="header"/>


}
export default Header;