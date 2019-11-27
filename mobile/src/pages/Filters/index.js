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

const images = [finance, lawer, education, medicine, it, architeture];

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
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  console.tron.log('imagem', images);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('filters');
      setCategories(response.data);
    }
    loadCategories();
  }, []);

  function handleSelectFilter(category) {
    const checkExists = categoriesSelected.find(
      cat => cat.category === category.category
    );
    console.tron.log(checkExists);
    if (checkExists) {
      setCategoriesSelected([
        ...categoriesSelected.filter(cat => cat.category !== category.category),
      ]);
      console.tron.log(
        categoriesSelected.filter(cat => cat.category !== category.category)
      );
    } else {
      setCategoriesSelected([...categoriesSelected, category]);
    }
  }

  return (
    <Background>
      <Container>
        <SelectText>
          Selecione pelo menos uma área que você pensa em seguir:
        </SelectText>

        <ProvidersList
          data={categories}
          keyExtractor={category => String(category.id)}
          renderItem={({ item: category }) => (
            <Provider
              selected={categoriesSelected.some(
                cat => cat.category === category.category
              )}
              onPress={() => handleSelectFilter(category)}
            >
              <Avatar
                source={
                  category.id
                    ? images[category.id - 1]
                    : `https://api.adorable.io/avatar/50/${category.category}.png`
                }
              />
              <Name>{category.category}</Name>
            </Provider>
          )}
        />

        <SubmitButton
          onPress={() =>
            navigation.navigate('Preview', { category: categoriesSelected })
          }
        >
          Já escolhi!
        </SubmitButton>
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
