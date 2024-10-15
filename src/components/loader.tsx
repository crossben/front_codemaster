import { ScaleLoader, BeatLoader } from 'react-spinners';

export const ScaleLoaderC: React.FC = () => {
    return (
        <div className="loader">
            <ScaleLoader />
        </div>
    );
};

export const BeatLoaderC: React.FC = () => {
    return (
        <div className="loader">
            <BeatLoader />
        </div>
    );
};

