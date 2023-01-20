import React, { PropsWithChildren } from 'react';

const SEO = ({ children }: PropsWithChildren) => {
  return (
    <>
      <meta name="google-site-verification" content={process.env.GATSBY_GOOGLE_SITE_VERIFICATION} />
      {children}
    </>
  );
};

export default SEO;
