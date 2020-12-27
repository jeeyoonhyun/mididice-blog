export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe89a0132319cfa51ea613e',
                  title: 'Sanity Studio',
                  name: 'mididice-blog-studio',
                  apiId: '761509ee-69af-4291-8e00-201a61f7bf82'
                },
                {
                  buildHookId: '5fe89a0132319c0a0bea5f36',
                  title: 'Blog Website',
                  name: 'mididice-blog',
                  apiId: '167f562e-688c-42bb-93d6-8b0007da0cc5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeeyoonhyun/mididice-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://mididice-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
