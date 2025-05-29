import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Algum erro foi detectado", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  return { data, loading };
};
