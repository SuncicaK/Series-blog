import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setErorr] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(() => {
           fetch(url, {signal: abortCont.signal })
           .then(res => {
               if(!res.ok) {
                   throw Error ('Cannot upload the page.');
               }
               return res.json()
           }) 
           .then(data => {
               setData(data);
               setIsPending(false);
               setErorr(null);
           })
           .catch(err =>{
               if(err.name === 'AbortError') {
                   console.log('fetch aborted');
               }else{
               setIsPending(false);
               setErorr(err.message);
               }
           })
        }, 1000);
        return () => abortCont.abort();
       }, [url]); 

       return { data, isPending, error }
}

export default useFetch;