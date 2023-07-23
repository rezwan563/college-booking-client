import { useQuery} from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const useOneCollege = () =>{
    const {id} = useParams()
    const { isLoading, refetch, data: singleCollege=[]} = useQuery({
        queryKey:['onecollege'],
        queryFn: async () =>{
            const res = fetch(`http://localhost:5000/college_services/colleges/${id}`)
            return (await res).json()
        }
    })
    return [singleCollege, isLoading, refetch]
}

export default useOneCollege;