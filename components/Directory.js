import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const Directory = () => {
  const sections = useSelector((state) => state.directory.sections);

  return (
    <S.DirectoryContainer>
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </S.DirectoryContainer>
  );
};

export default Directory;

// Styled Components
const S = {};

S.DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
