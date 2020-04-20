import React, {useMemo} from 'react';
import {FormattedMessage} from 'react-intl';
import {Grid, Box} from 'grommet';
import styled, {css} from 'styled-components';
import {useScreenSize} from 'providers/theme';
import {useCategoriesSelector} from 'providers/categories';
import withResponsive from 'components/withResponsive';
import Category from 'organisms/category';
import Skeleton from 'organisms/category/skeleton';

const loadingCards = [...Array(8)];

const LayoutSpread = css`
  ${({isSmall}) =>
    !isSmall &&
    `
    :nth-child(1) {
      grid-row-start: 1;
      grid-column: 1 / span 3;
    }
    :nth-child(2) {
      grid-row-start: 1;
      grid-column: 4 / span 3;
    }
    :nth-child(n + 3) {
      grid-column: span 2;
    }
    `}
`;

const Card = styled(Category)`
  ${LayoutSpread}
`;

const SkeletonCard = styled(Skeleton)`
  ${LayoutSpread}
`;

const CardContainer = withResponsive(styled(Grid)`
  grid-auto-rows: 240px;
`);

const selector = ({loading, loaded, byId, ids}) => ({
  loading,
  loaded,
  byId,
  ids
});

const Categories = () => {
  const {isSmall} = useScreenSize();
  const {loading, loaded, byId, ids} = useCategoriesSelector(selector);

  const validIds = useMemo(() => ids.filter(id => byId[id].exists), [ids]);

  return (
    <Box align="center" pad="small" width="100%">
      <CardContainer
        columns={{
          count: isSmall ? 1 : 6,
          size: 'auto'
        }}
        gap="medium">
        {validIds.map(id => (
          <Card key={id} id={id} isSmall={isSmall} />
        ))}
        {loaded && validIds.length === 0 && <FormattedMessage id="pages.categories.noResults" />}
        {loading && loadingCards.map((v, index) => <SkeletonCard key={index} isSmall={isSmall} />)}
      </CardContainer>
    </Box>
  );
};

export default Categories;
