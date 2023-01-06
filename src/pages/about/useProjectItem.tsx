import { useTheme } from '@emotion/react';
import { GetLinkIcon } from 'pages/about/aboutPage.type';
import WebIcon from 'assets/images/icon_web.svg';
import DownloadIcon from 'assets/images/icon_download.svg';
import InformationIcon from 'assets/images/icon_information.svg';
import GithubIcon from 'assets/images/icon_github.svg';

const useProjectItem = () => {
  const theme = useTheme();

  const getLinkIcon: GetLinkIcon = (type) => {
    if (type === 'github') {
      return <GithubIcon />;
    } else if (type === 'website') {
      return <WebIcon />;
    } else if (type === 'download') {
      return <DownloadIcon />;
    }

    return <InformationIcon />;
  };

  return {
    theme,
    getLinkIcon,
  };
};

export { useProjectItem };
