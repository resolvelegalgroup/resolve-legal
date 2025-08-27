const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWpPage {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }

        posts: allWpPost {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }

        members: allWpTeamMember {
          edges {
            node {
              slug
              id
            }
          }
        }

        events: allWpResolveEvents {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else {
        const pageSlug = node.uri
          .split("/")
          .filter(item => item !== "")
          .join("/")

        createPage({
          path: `/${pageSlug}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            id: node.id,
          },
        })
      }
    })

    const members = data.members.edges
    members.forEach(({ node }, index) => {
      createPage({
        path: `/our-team/${node.slug}/`,
        component: path.resolve("./src/templates/team.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : members[index - 1].node.slug,
          prev:
            index === members.length - 1 ? null : members[index + 1].node.slug,
        },
      })
    })

    const events = data.events.edges
    events.forEach(({ node }, index) => {
      createPage({
        path: `/events/${node.slug}/`,
        component: path.resolve("./src/templates/event.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : events[index - 1].node.slug,
          prev:
            index === events.length - 1 ? null : events[index + 1].node.slug,
        },
      })
    })

    const posts = data.posts.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/resources/${node.slug}/`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : posts[index - 1].node.slug,
          prev: index === posts.length - 1 ? null : posts[index + 1].node.slug,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
