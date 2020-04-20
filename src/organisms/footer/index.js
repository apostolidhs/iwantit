import React from 'react';
import {useIntl} from 'providers/localization';
import {Footer as GFooter, Anchor, Box} from 'grommet';
import {Favorite, Info} from 'grommet-icons';
import Logo from 'components/logo';

const Footer = () => {
  const intl = useIntl();

  return (
    <GFooter background="dark-1" pad="large">
      <Logo color="white" />
      <Box gap="small">
        <Anchor
          icon={<Favorite color="neutral-4" />}
          color="white"
          label={intl('footer.madeWithLove')}
          target="_blank"
          href="https://github.com/apostolidhs/iwantit"
        />
        <Anchor
          icon={<Info color="neutral-3" />}
          color="white"
          label={intl('footer.whatIsThis')}
          target="_blank"
          href={`${process.env.PUBLIC_URL}/report.pdf`}
        />
      </Box>
    </GFooter>
  );
};

export default Footer;
