import styled from 'styled-components';

export interface ParagraphProps {
  small: boolean;
  fade: boolean;
}

export const Paragraph = styled.p`
  font-family: Helvetica Neue, Helvetica, Roboto, sans-serif;
  color: ${({ fade }: ParagraphProps) => (fade ? '#a7b7c4' : '#F0F9FF')};
  font-size: ${({ small }: ParagraphProps) => (small ? '1.4rem' : '1.6rem')};
  line-height: 1.3;
  margin: 1rem 0 0;
`;

export default Paragraph;
