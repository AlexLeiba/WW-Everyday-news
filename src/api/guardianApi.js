const API_KEY = "c87ccd38-518c-4143-bba5-dc7233732bbd";

// la apelare adaugam parametri doriti, salvam intro variabila rezultatul, si trimitem lincul construit de api catre Fetch
export function getNewsEndpoint(section, pageNumber, pageSize) {
  const queryParams = `?api-key=${API_KEY}&show-fields=all&page=${pageNumber}&page-size=${pageSize}&section=${section}`;

  return `https://content.guardianapis.com/search${queryParams}`;
}

// prin (id) voi identifica pe care stire am dat click
export function getNewsDetailsEndpoint(id) {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${id}${queryParams}`;
}
