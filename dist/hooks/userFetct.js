"use strict";
// // src/hooks/useFetch.ts
// import { useState, useEffect } from 'react';
// interface FetchState<T> {
//   data: T | null;
//   error: string | null;
//   isLoading: boolean;
// }
// function useFetch<T>(url: string): FetchState<T> {
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError('Error fetching data');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);
//   return { data, error, isLoading };
// }
// export default useFetch;
