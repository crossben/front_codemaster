import Sidebar from "../sidebar/sidebar";

const Dashboard: React.FC = () => {
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="container col-8 p-3 mt-5">
                    <h1>Dashboard</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

