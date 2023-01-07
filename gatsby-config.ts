import type { GatsbyConfig } from 'gatsby';
const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Victor Log`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          remarkPlugins: [require('remark-gfm')],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
              ignoreFileExtensions: [`png`, `jpeg`],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: path.join(__dirname, './src/layouts/MainLayout/MainLayout.tsx'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/components/**`, `**/use*.ts?(x)`, `**/*.ts`],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
};

export default config;
