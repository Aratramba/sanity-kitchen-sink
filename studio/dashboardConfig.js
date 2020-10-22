export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f916a24e03be3f27cf5d9a9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ki1zk2n9',
                  apiId: 'd9c45e91-1852-444d-82e5-9601035af5d1'
                },
                {
                  buildHookId: '5f916a245ce4e3d6a45573da',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q35ssqbi',
                  apiId: '89d7ccd7-eda7-48d7-967e-2072eea09359'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Aratramba/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q35ssqbi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
