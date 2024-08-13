export const AUTH = "auth";

export const getStorage = (key: string) => {
  const value = localStorage.getItem(key);

  if (!value) return null;

  return JSON.parse(value);
};

export const setStorage = <T>(key: string, value: T) => {
  const jsonValue = JSON.stringify(value);

  localStorage.setItem(key, jsonValue);
  return value;
};
