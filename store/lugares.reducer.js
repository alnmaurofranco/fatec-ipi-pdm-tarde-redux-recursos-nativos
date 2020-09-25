import Lugar from "../modelo/Lugar";
import { ADD_LUGAR } from "./lugares.action";

const estadoInicial = {
  lugares: [],
};

export default (estado = estadoInicial, action) => {
  switch (action.type) {
    case ADD_LUGAR:
      const dataLugar = new Lugar(
        new Date().toString(),
        action.dadosLugar.nomeLugar,
        action.dadosLugar.imagemURI
      );
      return {
        lugares: estado.lugares.concat(dataLugar),
      };
    default:
      return estado;
  }
};
