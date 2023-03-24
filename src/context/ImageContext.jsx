import { createContext, useState } from "react";
import axios from 'axios'

export const ImageContext = createContext(null)

const ImageProvider = ({children}) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const imageData = query=>{
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${import.meta.env.VITE_FLICKR_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then((response) => {
            setImages(response.data.photos.photo);
            setIsLoading(false);
        }).catch((error) => {
            console.log(
                "Encountered an error with fetching and parsing data",
                error
              );
        })
    }


    return <ImageContext.Provider values={{images, isLoading, imageData }}>
        {children}
    </ImageContext.Provider>
}

export default ImageProvider