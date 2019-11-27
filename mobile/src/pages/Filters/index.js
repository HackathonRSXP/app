import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

import medicine from '../../assets/filters/medicine.png';
import lawer from '../../assets/filters/lawer.png';
import finance from '../../assets/filters/finance.png';
import education from '../../assets/filters/education.png';
import architeture from '../../assets/filters/architeture.png';
import it from '../../assets/filters/it.png';

import {
  Container,
  ProvidersList,
  Provider,
  Avatar,
  Name,
  SelectText,
  SubmitButton,
} from './styles';

// import api from '~/services/api';

export default function Filters({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // async function loadProviders() {
    //   const response = await api.get('providers');
    //   setProviders(response.data);
    // }
    // loadProviders();

    setCategories([
      {
        image: medicine,
        title: 'Medicina',
      },
      {
        image: lawer,
        title: 'Adivogado',
      },
      {
        image: education,
        title: 'Educação',
      },
      {
        image: finance,
        title: 'Finanças',
      },
      {
        image: it,
        title: 'Tecnologia',
      },
      {
        image: architeture,
        title: 'Arquitetura',
      },
    ]);
  }, []);

  return (
    <Background>
      <Container>
        <SelectText>
          Selecione pelo menos uma área que você pensa em seguir:
        </SelectText>

        <ProvidersList
          data={categories}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() =>
                navigation.navigate('SelectDateTime', { provider })
              }
            >
              <Avatar
                source={
                  provider.image
                    ? provider.image
                    : `https://api.adorable.io/avatar/50/${provider.title}.png`
                }
              />
              <Name>{provider.title}</Name>
            </Provider>
          )}
        />

        <SubmitButton onPress={() => {}}>Já escolhi!</SubmitButton>
      </Container>
    </Background>
  );
}

Filters.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
