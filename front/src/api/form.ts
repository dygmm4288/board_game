const camel_to_snake = (key: string) => {
  return key.replace(/[A-Z]/g, (s) => {
    const lower = s.toLowerCase();
    return "_" + lower;
  });
};

export const toFormData = (dict: { [key: string]: string | number }) => {
  const data = new FormData();

  Object.entries(dict).forEach(([key, value]) => {
    const v = String(value);
    data.append(camel_to_snake(key), v);
  });

  return data;
};
