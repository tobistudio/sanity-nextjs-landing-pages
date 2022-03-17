export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6233c3641f5ee31a501a4b4c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o4ne3me5',
                  apiId: '54f9e4df-201c-4c92-9b18-0a107fd29f75'
                },
                {
                  buildHookId: '6233c3641c0fe21ae388cb7f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4yzfgyyp',
                  apiId: '3e780988-8bad-4b88-8eb8-6102c08800e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bdougie/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4yzfgyyp.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
