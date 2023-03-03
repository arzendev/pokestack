export const getLocalStorage = (key: string, defaultValue: string = "") => {
  const value = localStorage.getItem(key);

  if (value === null) return defaultValue;

  return JSON.parse(value);
};
