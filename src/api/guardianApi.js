const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
export function getNewsEndpoint(section, pageNumber, pageSize) {
  if (!API_KEY) return;
  const queryParams = `?api-key=${API_KEY}&show-fields=all&page=${pageNumber}&page-size=${pageSize}&section=${section}`;

  return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(id) {
  if (!API_KEY) return;
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${id}${queryParams}`;
}
