import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import { ScaleLoaderC } from "@/components/loader";
import { getInstructorDataFn } from "@/services/instructor.service";

const SingleProfilI = () => {
    const { id } = useParams<{ id: string }>();

    interface Course {
        _id: string;
        title: string;
    }

    interface UserData {
        uid: string;
        firstname: string;
        lastname: string;
        email: string;
        phoneNumber?: string;
        googleId?: string;
        profileImageUrl?: string;
        role?: string;
        enrolledToCourses?: Course[];
    }

    const [data, setData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getInstructorDataFn(id);
            if (response.data.instructor && response.data.instructor.success) {
                setData(response.data.instructor.instructor);
            } else {
                console.error("Error: instructor not found or request failed");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <ScaleLoaderC />
            </div>
        );
    }

    if (!data) {
        return (
            <div className="alert alert-danger text-center" role="alert">
                Aucune donnée trouvée pour cet instructeur.
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-8 offset-md-1">
                    <div className="card mt-4">
                        <div className="card-header bg-primary text-white text-center">
                            <h2>{data.firstname} {data.lastname}</h2>
                        </div>
                        <div className="card-body d-flex flex-column align-items-center">
                            <img
                                src={data.profileImageUrl || "/default-profile.png"}
                                alt={`${data.firstname} ${data.lastname}`}
                                className="rounded-circle mb-3"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            />
                            <ul className="list-group list-group-flush w-100">
                                <li className="list-group-item">
                                    <strong>Email:</strong> {data.email}
                                </li>
                                <li className="list-group-item">
                                    <strong>Téléphone:</strong> {data.phoneNumber || "Non renseigné"}
                                </li>
                                <li className="list-group-item">
                                    <strong>Rôle:</strong> {data.role || "Non disponible"}
                                </li>
                                <li className="list-group-item">
                                    <strong>Google ID:</strong> {data.googleId || "Non disponible"}
                                </li>
                                <li className="list-group-item">
                                    <strong>Cours inscrits:</strong>
                                    <ul className="mt-2">
                                        {data.enrolledToCourses && data.enrolledToCourses.length > 0 ? (
                                            data.enrolledToCourses.map((course) => (
                                                <li key={course._id}>{course.title}</li>
                                            ))
                                        ) : (
                                            <li>Aucun cours</li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProfilI;
