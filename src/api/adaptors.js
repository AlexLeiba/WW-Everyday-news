export function getAdaptedData(apiData) {
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
