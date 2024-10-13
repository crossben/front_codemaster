import Sidebar from "../sidebar/sidebar";
import { FaUsers } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineEdit, MdOutlineRemoveRedEye, MdOutlineAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const User: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="row">
            <div className="col-2">
                <Sidebar />
            </div>
            <div className="container col-8 p-3 mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-12 mb-4">
                        <div className="card h-100 shadow-sm hover-shadow transition">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-primary">Current Users</h5>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <i className="card-text text-primary fs-2"><FaUsers /></i>
                                    <p className="card-text fs-4 fw-bold">52</p>
                                </div>
                                <p className="card-text mt-auto">Manage and view all registered users on the platform. Monitor user activity and engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <form className="d-flex">
                        <div className="input-group">
                            <input type="text" className="form-control me-2" placeholder="Search" />
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </form>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddUserModal">
                        <MdOutlineAdd />
                    </button>
                </div>
                <table className="mt-5 table table-striped">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>numero</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => navigate("/users/1")}>
                            <td>
                                <img src="https://via.placeholder.com/50" alt="Avatar" className="rounded-circle" /></td>
                            <td>Doe</td>
                            <td>John</td>
                            <td>john.doe@example.com</td>
                            <td>+1 234 567 8901</td>
                            <td>
                                <a href="#" className="btn btn-sm">
                                    <MdOutlineRemoveRedEye />
                                </a>
                                <a href="#" className="btn btn-sm  me-2">
                                    <MdOutlineEdit />
                                </a>
                                <a href="#" className="btn btn-sm">
                                    <MdDeleteOutline />
                                </a>
                            </td>
                        </tr>
                        <tr onClick={() => navigate("/users/2")}>
                            <td><img src="https://via.placeholder.com/50" alt="Avatar" className="rounded-circle" /></td>
                            <td>Smith</td>
                            <td>Jane</td>
                            <td>jane.smith@example.com</td>
                            <td>+1 987 654 3210</td>
                            <td>
                                <a href="#" className="btn btn-sm">
                                    <MdOutlineRemoveRedEye />
                                </a>
                                <a href="#" className="btn btn-sm me-2">
                                    <MdOutlineEdit />
                                </a>
                                <a href="#" className="btn btn-sm">
                                    <MdDeleteOutline />
                                </a>
                            </td>
                        </tr>
                        <tr onClick={() => navigate("/users/3")}>
                            <td><img src="https://via.placeholder.com/50" alt="Avatar" className="rounded-circle" /></td>
                            <td>Johnson</td>
                            <td>Robert</td>
                            <td>robert.johnson@example.com</td>
                            <td>+1 456 789 0123</td>
                            <td>
                                <a href="#" className="btn btn-sm">
                                    <MdOutlineRemoveRedEye />
                                </a>
                                <a href="#" className="btn btn-sm me-2">
                                    <MdOutlineEdit />
                                </a>
                                <a href="#" className="btn btn-sm">
                                    <MdDeleteOutline />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container col-10 p-3 mt-5">
                <div className="modal fade" id="AddUserModal" tabIndex={-1} aria-labelledby="AddUserModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-4" id="AddUserModalLabel">Add User</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="p-3">
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="firstname" className="form-label">First Name</label>
                                            <input type="text" className="form-control form-control-lg" id="firstname" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lastname" className="form-label">Last Name</label>
                                            <input type="text" className="form-control form-control-lg" id="lastname" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control form-control-lg" id="email" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                            <input type="tel" className="form-control form-control-lg" id="phoneNumber" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="googleId" className="form-label">Google ID</label>
                                        <input type="text" className="form-control form-control-lg" id="googleId" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control form-control-lg" id="password" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="profileImageUrl" className="form-label">Profile Image URL</label>
                                        <input type="url" className="form-control form-control-lg" id="profileImageUrl" />
                                    </div>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
