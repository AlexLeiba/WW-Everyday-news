import { useState } from "react";

// Primim ca parametri numele cheii si valoarea acesteia.
function useLocalStorage(key, value) {
  // Extragem valoarea din localStorage asociata cheii primite.
  const valueLocalStorage = localStorage.getItem(key);
  // Parsam valoarea extrasa. Daca aceasta are valoarea null inseamna ca nu exista in localStorage.
  // Daca nu avem valoare asociata cheii in localStorage, starea initiala va fi valoarea primita ca argument (vezi la teorie operatorul ||).

  // cream starea initiala si o pasam in statul:initial

  const initialStorage = JSON.parse(valueLocalStorage) || value;
  const [state, setState] = useState(initialStorage);

  // Cream o functie care modificia valoarea din localStorage si actualizeaza si state-ul.
  function setStateAndStorage(value) {
    setState(value);
    // Inainte sa setam noua valoare, avem grija sa o stringifiem.
    localStorage.setItem(key, JSON.stringify(value));
  }
  return [state, setStateAndStorage];
}

export default useLocalStorage;
