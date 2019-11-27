import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import api from '../../services/api';
import medicine from '../../assets/filters/medicine.png';
import lawer from '../../assets/filters/lawer.png';
import finance from '../../assets/filters/finance.png';
import education from '../../assets/filters/education.png';
import architeture from '../../assets/filters/architeture.png';
import it from '../../assets/filters/it.png';

import imageEnterprise from '../../assets/enterprises/imageEnterprises.png';
const images = [finance, lawer, education, medicine, it, architeture];

import {
  Container,
  ProvidersList,
  Provider,
  Avatar,
  Name,
  Title,
  DescriptionCard,
  DescriptionText,
  SubmitButton,
  ContainerButtons,
} from './styles';

// import api from '~/services/api';

export default function Enterprises({ navigation }) {
  // useEffect(() => {
  //   async function loadCategories() {
  //     const response = await api.get('filters');
  //     setCategories(response.data);
  //   }
  //   loadCategories();
  // }, []);

  function handleNext() {}

  function handlePrevs() {}

  return (
    <Background>
      <Container>
        <Title>Como o Neon está mudando sua vida financeira</Title>

        <DescriptionCard>
          <DescriptionText>
            O Neon é um banco 100% digital, feito pensando em facilitar sua
            vida. Chega de perder tempo em ir em agências e em filas! O banco
            Neon foi feito para ser a conta dos seus sonhos.
          </DescriptionText>
        </DescriptionCard>

        <Avatar source={imageEnterprise} />

        <ContainerButtons>
          <SubmitButton>Anterior</SubmitButton>
          <SubmitButton>Próximo</SubmitButton>
        </ContainerButtons>
      </Container>
    </Background>
  );
}

Enterprises.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
