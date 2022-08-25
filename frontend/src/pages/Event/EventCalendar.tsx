import {FC} from "react";
import {Button, Calendar} from "antd";
import './EventCalendat.scss'
const EventCalendar: FC = () => {
    return (
        <div className="event-calendar">
            <Calendar/>
            <Button>
                Add new Event
            </Button>
        </div>)
}
export default EventCalendar;