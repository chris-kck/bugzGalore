import { useState, useEffect } from "react";

//This hook can be improved
// In this case, url is the endpoing that is being targeted
const useFetch = (endPoint) => {
  const url = "http://35.239.253.67:5000/" + endPoint;

  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            setisPending(false);
            throw Error("Could not fetch the data");
          }

          return res.json();
        })
        .then((data) => {
          setData(data);
          setisPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Aborted");
          } else {
            setisPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
