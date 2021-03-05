function snakeToCamelCaseObject(obj: any) {
  const snakeToCamelCase = (key: string) => {
    return key.replace(/_([a-z])/g, (m) => m[1].toUpperCase());
  };

  const entries = Object.entries(obj);
  const newObj = entries.reduce((obj, [key, value]) => {
    return { ...{ [snakeToCamelCase(key)]: value }, ...obj };
  }, {});
  return newObj;
}

const objInSnakeCase = {
  pessoa_id: 1,
  is_bot: false,
  first_name: "C3P0",
  last_name: "Raw",
};

const objInCamelCase = snakeToCamelCaseObject(objInSnakeCase);
objInCamelCase;
