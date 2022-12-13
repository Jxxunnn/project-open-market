export const getLocalStorageItemList = (key) => {
  if (!localStorage.getItem(key)) return;
  let itemList = localStorage.getItem(key);
  itemList = JSON.parse(itemList);
  return itemList;
};

export const setLocalStorageItemList = (key, item, state) => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify([]));
  }
  let itemList = localStorage.getItem(key);
  itemList = JSON.parse(itemList);
  itemList.push(item);
  itemList = [...new Set(itemList)];

  if (state === false) {
    itemList = itemList.filter((id) => {
      return item !== id;
    });
    localStorage.removeItem(key);
  }
  localStorage.setItem(key, JSON.stringify(itemList));
};
