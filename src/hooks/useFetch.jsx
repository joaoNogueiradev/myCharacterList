import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refatorando Post

  // const [config, setConfig] = useState(null); //corpo da requisição;
  // const [method, setMethod] = useState(null); //define o método da requisição;
  // const [idDelete, setIdDelete] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);

  // const httpConfig = (data, method) => {
  //   if (method === "POST") {
  //     setConfig({
  //       method,
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     setMethod(method);
  //   } else if (method === "DELETE") {
  //     setConfig({
  //       method,
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //     setMethod(method);
  //     setIdDelete(data);
  //   }
  // };

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

  //   Refatorando POST

  // useEffect(() => {
  //   const httpRequest = async () => {
  //     if (method === "POST") {
  //       let fetchOptions = [url, config];

  //       const res = await fetch(...fetchOptions);
  //       const json = await res.json();

  //       setCallFetch(json);
  //     } else if (method === "DELETE") {
  //       const customURL = `${url}/${idDelete}`;
  //       const res = await fetch(customURL, config);
  //       const json = await res.json();

  //       setCallFetch(json);
  //     }
  //   };
  //   httpRequest();
  // }, [config, method, url, idDelete]);

  return { data, loading };
};
