import React, {useState} from 'react'
import Loader from '../UI/Loader/Loader'

const useWeatherLoader = () => {
    const [isloading, setIsLoading] = useState(false)
    return [
        isloading ? <Loader /> : null,
        () => setIsLoading(true),
        () => setIsLoading(false)
    ]
}

export default useWeatherLoader