import { useState, useCallback } from "react";

export const useHttp = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const request = useCallback(async (url) => {
      setIsLoading(true);

      try {
         const res = await fetch(url);
         const data = await res.json();

         if(!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
         }

         setIsLoading(false);

         return data;
      } catch (error) {
         setIsLoading(false)
         setError(error.message);
         throw error;
      }
   }, []);

   return { isLoading, error, request };
}