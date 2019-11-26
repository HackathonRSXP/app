import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#8FA6CB',
})`
  flex: 1;
  line-height: 21px;
  font-size: 18px;
  margin-left: 10px;
  color: #fff;
`;
