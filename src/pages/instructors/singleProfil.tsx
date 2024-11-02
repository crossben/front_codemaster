import { useState, useEffect, useCallback, FC } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import { ScaleLoaderC } from "@/components/loader";
import { getInstructorDataFn } from "@/services/instructor.service";
import { IInstructor } from "@/types/types";

const SingleProfilI: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<IInstructor | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fonction pour récupérer les données de l'instructeur
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
                                    <strong>Uid:</strong> {data.uid}
                                </li>
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
                                    <strong>Cours :</strong>
                                    <ul className="mt-2">
                                        {data.courses && data.courses.length > 0 ? (
                                            data.courses.map((course) => (
                                                <li key={course._id}>{course.title}</li>
                                            ))
                                        ) : (
                                            <li>Aucun cours</li>
                                        )}
                                    </ul>
                                </li>
                                <li className="list-group-item">
                                    <strong>Timestapms :</strong>
                                    <ul className="mt-2">
                                        <li key="createdAt">Créé le: {new Date(data.createdAt).toLocaleString()}</li>
                                        <li key="updatedAt">Mis à jour le: {new Date(data.updatedAt).toLocaleString()}</li>
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
