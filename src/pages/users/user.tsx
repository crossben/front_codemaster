import Sidebar from "../sidebar/sidebar";
import { FaUsers } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineEdit, MdOutlineRemoveRedEye, MdOutlineAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, FormEvent } from 'react';
import * as UserService from '@/services/user.service';
import { ScaleLoaderC } from '@/components/loader';
import { IUser } from "@/types/interface";

const User: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // const [query, setQuery] = useState('');

    // const handleSearch = async () => {

    // }

    const getUser = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await UserService.getUsers();
            if (response && response.data) {
                setUsers(response.data.users);
                // console.log(response.data);
                localStorage.setItem('users_lenght', (response.data.users.length).toString());
            } else {
                setError("Failed to fetch users.");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            setError("Error fetching users.");
        } finally {
            setLoading(false);
        }
    }, []);

    const handleUserCreate = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const firstname = (document.getElementById("firstname") as HTMLInputElement).value;
            const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
            const email = (document.getElementById("email") as HTMLInputElement).value;
            const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;
            // const googleId = (document.getElementById("googleId") as HTMLInputElement).value;
            const password = (document.getElementById("password") as HTMLInputElement).value;
            const profileImageUrl = (document.getElementById("profileImageUrl") as HTMLInputElement).value;

            const response = await UserService.signInFn(firstname, lastname, email, phoneNumber, password, profileImageUrl);
            if (response && response.data) {
                console.log(response.data);

                getUser();

            } else {
                console.error("Failed to create user.");
            }
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    useEffect(() => {
        getUser();
    }, [getUser]);

    const navigate = useNavigate();
    return (
        <div className="row">
            <div className="col-2">
                <Sidebar />
            </div>
            <div className="container col-8 p-3 mt-3">
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <ScaleLoaderC />
                    </div>
                ) : (
                    <>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-8 col-lg-12 mb-4">
                                <div className="card h-100 shadow-sm hover-shadow transition">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-primary">Current Users</h5>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <i className="card-text text-primary fs-2"><FaUsers /></i>
                                            <p className="card-text fs-4 fw-bold">{users.length}</p>
                                        </div>
                                        <p className="card-text mt-auto">Manage and view all registered users on the platform. Monitor user activity and engagement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
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
                            <tbody className="align-content-center align-content-center">
                                {Array.isArray(users) && users.map((user, index) => (
                                    <tr key={index} onClick={() => navigate(`/user/${user._id}`)}>
                                        <td className="">
                                            <img src={user.profileImageUrl || "https://via.placeholder.com/50"} alt="Avatar" className="rounded-circle img-fluid" width={50} /></td>
                                        <td>{user.lastname}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber || "N/A"}</td>
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
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
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
                                <form onClick={handleUserCreate} className="p-3">
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
