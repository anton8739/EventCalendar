import './Home.scss'
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router";
const Home = () => {
    const navigate = useNavigate();
    const startUsageHandler = () => {
        navigate(RouteNames.EVENT)
    }
    return (<div className="home-page">
        <h2>
            Welcom to Calendar Event manager
        </h2>
        <Button onClick={startUsageHandler}>
            Start usage now
        </Button>
    </div>)
}
export default Home;