import React from "react";

import { View, StyleSheet, Text, Platform, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BotaoCabecalho from "../componentes/BotaoCabecalho";
import LugarItem from "../componentes/LugarItem";

const ListaDeLugaresTela = (props) => {
  const lugares = useSelector((estado) => estado.lugares.lugares);
  return (
    <View>
      <FlatList
        data={lugares}
        keyExtractor={(lugar) => lugar.id}
        renderItem={(lugar) => {
          return (
            <LugarItem
              nomeLugar={lugar.item.titulo}
              onSelect={() => {
                props.navigation.navigate('DetalhesDoLugar', { tituloLugar: lugar.item.titulo, idLugar: lugar.item.id })
              }}
              imagem={lugar.item.imagemURI}
              endereco={null}
            />
          );
        }}
      />
    </View>
  );
};

ListaDeLugaresTela.navigationOptions = (dadosNavegacao) => {
  return {
    headerTitle: "Lista de lugares",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
        <Item
          title="Adicionar"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => dadosNavegacao.navigation.navigate("NovoLugar")}
        />
      </HeaderButtons>
    ),
  };
};

const estilos = StyleSheet.create({});

export default ListaDeLugaresTela;
