import React, { useEffect, useState } from 'react';
import { getOnePicture } from '../../Services/PictureService';

export default function Slider() {
    const [halfSizePicture, setHalfSizePicture] = useState();

    useEffect(() => {
        const id = window.location.href.split('?')[1];
        const fetchData = async () => {
            const response = await getOnePicture(id);
            setHalfSizePicture(response.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {halfSizePicture && (
                <img src={halfSizePicture.halfSizePath} alt={halfSizePicture.description} />
            )}
        </div>
    );
}
