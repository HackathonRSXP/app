import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #b0e0e6;
  flex: 1;
  padding: 0 25px;
`;

export const PreviewContainer = styled(RectButton)`
  margin-top: 50px;
  padding: 10px;
  background: #fff;
  width: 240px;
`;

export const PreviewHeader = styled.View`
  margin-bottom: 15px;
`;

export const Separator = styled.View`
  height: 1px;
  background: #eee;
`;

export const Image = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  color: #8fa6cb;
`;

export const PreviewBody = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PreviewText = styled.Text`
  width: 180px;
`;
