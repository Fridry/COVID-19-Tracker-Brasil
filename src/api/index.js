import axios from "axios";

const url = "https://covid19-brazil-api.now.sh/api/report/v1";

//País
export const pais = async () => {
  let newUrl = `${url}/brazil`;
  try {
    const {
      data: { data },
    } = await axios.get(newUrl);

    const { country, cases, confirmed, deaths, recovered, updated_at } = data;

    return { country, cases, confirmed, deaths, recovered, updated_at };
  } catch (error) {
    console.log(error);
  }
};

export const estado = async (uf) => {
  let newUrl = `${url}/brazil/uf/${uf}`;
  try {
    const { data } = await axios.get(newUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
};

//Todos os Estados
export const todosEstados = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(url);

    return data;
  } catch (error) {
    console.log(error);
  }
};
