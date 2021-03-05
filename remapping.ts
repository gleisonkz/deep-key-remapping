export interface Person {
  pessoa_id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
}

type SnakeToCamelCase<Key extends string> = Key extends `${infer T}_${infer U}`
  ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}`
  : Key;

type SnakeToCamelCaseAdapter<T> = {
  [Key in keyof T as SnakeToCamelCase<Key & string>]: T[Key];
};

function snakeToCamelCaseObject<T>(obj: T): SnakeToCamelCaseAdapter<T> {
  const snakeToCamelCase = (key: string) => {
    return key.replace(/_([a-z])/g, (m) => m[1].toUpperCase());
  };

  const entries = Object.entries(obj);
  const newObj = entries.reduce((obj, [key, value]) => {
    return { ...{ [snakeToCamelCase(key)]: value }, ...obj };
  }, {});
  return newObj as SnakeToCamelCaseAdapter<T>;
}

const objInSnakeCase: Person = {
  pessoa_id: 1,
  is_bot: false,
  first_name: "C3P0",
  last_name: "Raw",
};

const objInCamelCase = snakeToCamelCaseObject(objInSnakeCase);
