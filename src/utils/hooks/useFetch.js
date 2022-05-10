import { useState, useEffect } from "react";

// Hooh-ul useFetch returneaza datele venite de la api
export default function useFetch(url) {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setState(json));
  }, [url]);

  return state;
}
