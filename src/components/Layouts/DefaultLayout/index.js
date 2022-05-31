import SideBar from '../components/Header';
import Header from '../components/SideBar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
