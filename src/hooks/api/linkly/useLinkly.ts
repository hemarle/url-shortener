import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "../../instance";

interface IShortenURLPayload{
    "originalUrl":string,
    "customShortUrl":string
}
export function useShortenURL(){
    async function shortenURL(payload:IShortenURLPayload){
        const {data}= await instance.post(`/api/urls/shorten`, payload)
        return data
    }
    const mutate= useMutation({
        mutationFn:shortenURL,
        mutationKey:["fetch shortened url"]
    })
    return mutate
}



interface Url {
    id: number;
    originalUrl: string;
    shortUrl: string;
    redirectCount: number;
    qrCode: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    userId: number | null;
  }
  
  interface IFetchAllURLResponse {
    currentPage: number;
    totalPages: number;
    totalUrls: number;
    urls: Url[];
  }

  interface IFetchURLProps{
pageNum?:number
  }
export function useFetchAllUrl(payload?:IFetchURLProps){
    async function fetchUrl():Promise<IFetchAllURLResponse> {
    const {data}= await instance.get(`api/urls/all?userId=&search=&page=${payload?.pageNum}&limit=5`)
    return data    
    }
    const query = useQuery({
        queryFn:fetchUrl,
        queryKey:[`fetch urls`, payload?.pageNum]
    })
    return query
}