export const filterEmojis = ({
  emojisData,
  searchText = '',
  maxResults = 20,
}) => {
  const filterEmojis = emojisData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (emoji.keywords.includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  });

  return filterEmojis.splice(0, 20);
};
