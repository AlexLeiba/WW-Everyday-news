export function getAdaptedData(apiData) {
  // prima data cand componenta este afisata pe ecran, inca nu are stirile, deci datele initial sint nule!! trebuie de adaugat un concept (early return)
  // LOGICA: daca apiData este undefined, sau "response" este undefined, returneaza un array gol!
  if (!apiData || !apiData.response) {
    return [];
  }
  const apiNewsList = apiData.response.results;

  const adaptedList = apiNewsList.map((apiNews) => {
    return {
      id: apiNews.id,
      thumbnail: apiNews.fields.thumbnail,
      title: apiNews.fields.headline,
      description: apiNews.fields.trailText,
    };
  });
  return adaptedList;
}

export default function getAdaptedDetailsData(apiData) {
  if (!apiData || !apiData.response) {
    return {};
  }
  const apiNews = apiData.response.content;
  return {
    title: apiNews.webTitle,
    description: apiNews.fields.trailText,
    images: apiNews.fields.main,
    content: apiNews.fields.body,
    thumbnail: apiNews.fields.thumbnail,
    date: apiNews.webPublicationDate,
    author: apiNews.fields.byline,
  };
}

function data() {
  return <div>Salut</div>;
}
