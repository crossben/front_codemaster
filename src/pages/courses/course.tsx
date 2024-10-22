import { useCallback, useEffect, useState, FC } from "react";
import Sidebar from "../sidebar/sidebar";
import { ICourse } from "@/types/types";
import * as courseService from "@/services/courses.service";
import { ScaleLoaderC } from "@/components/loader";
import { FaStar, FaUserAlt, FaClock, FaDollarSign } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Course: FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [courses, setCourses] = useState<ICourse[]>([]);

    const getCourses = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await courseService.getCourses();
            if (response && response.data) {
                setCourses(response.data);
                localStorage.setItem("courses_length", response.data.length.toString());
            } else {
                setError("Failed to fetch courses.");
            }
        } catch (error) {
            console.error("Error fetching courses:", error);
            setError("Error fetching courses.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getCourses();
    }, [getCourses]);

    return (
        <div>
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
                            <div className="row mb-4">
                                <div className="col-12">
                                    <h2 className="text-center">Courses</h2>
                                </div>
                            </div>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="d-flex justify-content-between mb-3">
                                <form className="d-flex">
                                    <div className="input-group">
                                        <input type="text" className="form-control me-2" placeholder="Search" />
                                        <button className="btn btn-primary">Search</button>
                                    </div>
                                </form>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddCourseModal">
                                    <MdOutlineAdd /> Add Course
                                </button>
                            </div>
                            <div className="row">
                                {courses.length > 0 ? (
                                    courses.map((course) => (
                                        <div className="col-12 col-md-6 col-lg-4 mb-4" onClick={() => navigate(`/course/${course._id}`)} key={course._id}>
                                            <div className="card h-100 shadow-sm">
                                                <img
                                                    src={course.imageUrl || "/default-course.jpg"}
                                                    alt={course.title}
                                                    className="card-img-top"
                                                    style={{ height: "200px", objectFit: "cover" }}
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{course.title}</h5>
                                                    <p className="card-text text-muted">{course.category}</p>
                                                    <p className="card-text text-truncate">{course.description}...</p>
                                                    <div className="d-flex justify-content-between">
                                                        <span>
                                                            <FaClock /> {course.duration}
                                                        </span>
                                                        <span>
                                                            <FaUserAlt /> {course.enrolledStudents || 0} students
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between align-items-center">
                                                    <span className="text-primary fw-bold">
                                                        <FaDollarSign /> {course.price.toFixed(2)}
                                                    </span>
                                                    <span className="text-warning">
                                                        <FaStar /> {course.rating?.toFixed(1) || "No rating"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <p className="text-center">No courses found.</p>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Course;
