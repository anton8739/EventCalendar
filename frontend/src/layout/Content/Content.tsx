import {FC, ReactNode} from "react";

interface props {
    children: ReactNode
}

const Content: FC<props> = ({children}) => {

    return (<div className="content">
        {children}
    </div>)

}
export default Content;