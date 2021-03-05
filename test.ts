import axios from "axios";

interface Person {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
}

async function getPerson() {
  const { data } = await axios.get<Person>("https://www.test.com/api/person");
  return data;
}

interface Person {
  pessoaId: number;
  isBot: boolean;
  firstName: string;
  lastName: string;
}

function getPersonFromXYZApi() {
  return {
    pessoa_id: 1,
    is_bot: false,
    first_name: "C3P0",
    last_name: "Raw",
  };
}

const obj: Person = getPersonFromXYZApi();
