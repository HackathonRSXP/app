import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  PreviewContainer,
  PreviewHeader,
  Image,
  Title,
  PreviewBody,
  PreviewText,
  Separator,
} from './styles';

export default function Preview({ navigation }) {
  return (
    <Container>
      <PreviewContainer
        onPress={() => {
          console.log('oi', navigation);
          navigation.navigate('Filters');
        }}
      >
        <PreviewHeader>
          <Image />
          <Title>Finanças</Title>
        </PreviewHeader>
        <Separator />
        <PreviewBody>
          <PreviewText>
            Veja como a Neon está inovando no mercado financeiro
          </PreviewText>
          <Icon name="chevron-right" size={20} />
        </PreviewBody>
      </PreviewContainer>
    </Container>
  );
}

Preview.navigationOptions = {
  title: 'Feed',
};
