import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import welcomeImage from '../../assets/welcome.png';

export default function Welcome({ navigation }) {
  return (
    <Onboarding
      onDone={() => navigation.navigate('SignIn')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={welcomeImage} />,
          title: 'Bem vindo',
          subtitle:
            'Vamos ver, juntos, como impactar as pessoas com tecnologia!',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={welcomeImage} />,
          title: 'Bem vindo',
          subtitle: 'A tecnologia está presente em tudo, e é só o começo.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={welcomeImage} />,
          title: 'Bem vindo',
          subtitle:
            'A tecnologia está mudando o nosso modo de viver. E se você fizesse parte disso?',
        },
      ]}
    />
  );
}
