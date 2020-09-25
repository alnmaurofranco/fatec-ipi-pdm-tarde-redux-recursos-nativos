export const ADD_LUGAR = "ADD_LUGAR";

export const addLugar = (nomeLugar, imagemURI) => {
  return {
    type: ADD_LUGAR,
    dadosLugar: {
      nomeLugar: nomeLugar,
      imagemURI: imagemURI
    },
  };
};
