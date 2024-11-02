import Sidebar from "./sidebar/sidebar";
import { Link } from 'react-router-dom';
import { FaUsers, FaUserTie, FaBook } from 'react-icons/fa';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="container col-8 p-3 mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <Link to="/users" className="text-decoration-none">
                                <div className="card h-100 shadow-sm hover-shadow transition">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-primary">Users</h5>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <i className="card-text text-primary fs-2"><FaUsers /></i>
                                            <p className="card-text fs-4 fw-bold">{localStorage.getItem("users_lenght") ? localStorage.getItem("users_lenght") : 0}</p>
                                        </div>
                                        <p className="card-text mt-auto">Manage and view all registered users on the platform. Monitor user activity and engagement.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <Link to="/instructors" className="text-decoration-none">
                                <div className="card h-100 shadow-sm hover-shadow transition">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-success">Instructors</h5>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <i className="card-text text-success fs-2"><FaUserTie /></i>
                                            <p className="card-text fs-4 fw-bold">{localStorage.getItem("instructor_lenght") ? localStorage.getItem("instructor_lenght") : 0}</p>
                                        </div>
                                        <p className="card-text mt-auto">View and manage our expert instructors. Monitor course creation and instructor performance.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <Link to="/courses" className="text-decoration-none">
                                <div className="card h-100 shadow-sm hover-shadow transition">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-info">Courses</h5>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <i className="card-text text-info fs-2"><FaBook /></i>
                                            <p className="card-text fs-4 fw-bold">{localStorage.getItem("courses_lenght") ? localStorage.getItem("courses_lenght") : 0}</p>
                                        </div>
                                        <p className="card-text mt-auto">Explore and manage all available courses. Monitor course popularity and student enrollment.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
