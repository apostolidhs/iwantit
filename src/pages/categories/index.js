import React from 'react';
import {Grid, Box} from 'grommet';
import styled, {css} from 'styled-components';
import {useScreenSize} from 'providers/theme';
import {useCategoriesSelector} from 'providers/categories';
import Category from 'organisms/category';
import Skeleton from 'organisms/category/skeleton';

const LoadingCards = [...Array(8)];

const LayoutSpread = css`
  ${({isSmall}) =>
    !isSmall &&
    `  :nth-child(1) {
grid-row-start: 1;
grid-column: 1 / span 3;
}
:nth-child(2) {
grid-row-start: 1;
grid-column: 4 / span 3;
}
:nth-child(n + 3) {
grid-column: span 2;
}`}
`;

const Card = styled(Category)`
  ${LayoutSpread}
`;

const SkeletonCard = styled(Skeleton)`
  ${LayoutSpread}
`;

const CardContainer = styled(Grid)`
  grid-auto-rows: 240px;
  width: 100%;
  max-width: ${({theme, isSmall}) => (isSmall ? '100%' : theme.global.size['xxlarge'])};
`;

const Categories = () => {
  const {isSmall} = useScreenSize();
  const {loading, loaded, byId, ids} = useCategoriesSelector(({loading, loaded, byId, ids}) => ({
    loading,
    loaded,
    byId,
    ids
  }));

  return (
    <Box align="center" width="100%">
      <CardContainer
        columns={{
          count: isSmall ? 1 : 6,
          size: 'auto'
        }}
        isSmall={isSmall}
        gap="medium">
        {ids.map(id => (
          <Card key={id} id={id} isSmall={isSmall} />
        ))}
        {loading && LoadingCards.map((v, index) => <SkeletonCard key={index} isSmall={isSmall} />)}
      </CardContainer>
    </Box>
  );
};

export default Categories;
