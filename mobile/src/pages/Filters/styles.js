import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SelectText = styled.Text`
  margin-top: 30px;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #7d84b2;
  text-align: center;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 15px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: ${props => (props.selected ? '#fff' : '#DDD')};
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  /* flex: 1; */
  margin: 0 40px;
  margin-bottom: 25px;
`;
