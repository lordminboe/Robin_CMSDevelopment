/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it



const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require("path");


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    wpcontent {
      heroes {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  }
`).then(result => {
  const heroes = result.data.wpcontent.heroes.edges;
  heroes.forEach(heroes => {
    const {id, slug} = heroes.node;
    createPage({
      path: slug,
      component: path.resolve('src/templates/heroTemplate.js'),
      context: {
        id,
        slug
      }
    })
  });
})
}

/* Aan de hand van dit stukje code worden de images vanuit WPgraphql omgezet tot images waarop Gatsby image optimization kan toepassen */
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphql_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
