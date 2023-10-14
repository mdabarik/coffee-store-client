import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            This is root
            <Outlet></Outlet>
        </div>
    );
};

export default Root;