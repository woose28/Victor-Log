/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const tagTemplate = path.resolve(`src/pages/tag/index.tsx`);

  const tags = await graphql(`
    query {
      tag: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  tags.data.tag.group.forEach(({ fieldValue }) => {
    createPage({
      path: `tag/${fieldValue}`,
      component: tagTemplate,
      context: {
        tag: fieldValue,
      },
    });
  });
};
