const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require("path");
const  {graphql} = require("gatsby");

exports.createPages = ({graphql, actions}) => {
const {createPage} = actions
const query = graphql(`
{
wpcontent{
  artists {
    edges  {
      node  {
        slug
        id
      }
    }
  }
}
}
`).then(result => {
  const artists = result.data.wpcontent.artists.edges;
  artists.forEach(artists => {
    const {id, slug} = artists.node;
    createPage({

      path: slug,
      component:path.resolve('src/templates/artist.js'),
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
