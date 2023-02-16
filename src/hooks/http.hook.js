import { useState, useCallback } from "react";

export const useHttp = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const request = useCallback(async (url) => {
      setIsLoading(true);

      try {
         const res = await fetch(url);

         if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status - ${res.status}`);
         }

         const data = await res.json();

         setIsLoading(false);

         return data;
      } catch (error) {
         setIsLoading(false);
         setError(error.message);
         throw(error);
      }
   }, []);

   const clearError = useCallback(() => {
      setError(null);
   }, []);

   return {isLoading, request, error, clearError};
}