import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import TiraFoto from "../componentes/TiraFoto";
import * as lugaresActions from "../store/lugares.action";

const NovoLugarTela = (props) => {
  const dispatch = useDispatch();
  const [novoLugar, setNovoLugar] = useState("");
  const [imagemURI, setImagemURI] = useState();

  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  };

  const adicionarLugar = () => {
    dispatch(lugaresActions.addLugar(novoLugar, imagemURI));
    props.navigation.goBack();
  };

  const fotoTirada = (imagemURI) => {
    setImagemURI(imagemURI);
  }

  return (
    <ScrollView>
      <View style={estilos.form}>
        <Text style={estilos.titulo}>Novo Lugar</Text>
        <TextInput
          style={estilos.textInput}
          onChangeText={novoLugarAlterado}
          value={novoLugar}
        />
        <TiraFoto onFotoTirada={fotoTirada} />
        <Button
          title="Salvar lugar"
          onPress={() => {
            adicionarLugar();
            setNovoLugar("");
          }}
        />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  form: {
    margin: 30,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 12,
  },
  textInput: {
    borderBottomColor: "#CCC",
    borderBottomWidth: 2,
    marginBottom: 12,
    paddingVertical: 8,
  },
});

export default NovoLugarTela;
