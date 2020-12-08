import {useState, useEffect } from 'react'
import {getAllPictures} from '../../Services/PictureService'

export default function usePictureList() {

    const [dataImg, setDataImg] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllPictures();
            setDataImg(response.data);
        }
        fetchData();
    }, [])



    return dataImg;
}
