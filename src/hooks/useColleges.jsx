import { useQuery} from "@tanstack/react-query"

const useColleges = () =>{
    const { isLoading, refetch, data: colleges =[]} = useQuery({
        queryKey: ['colleges'],
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/college_services/colleges")
            return res.json()
        }
    })
    return [colleges, refetch, isLoading]
}
export default useColleges;