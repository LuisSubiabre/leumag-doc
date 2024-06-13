import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leumag App",
  description: "Documentación",
  base: '/leumag-doc/',
  themeConfig: {
    footer: {
      copyright: 'última actualización: 13-06-2024'
    },
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Web Oficial', link: 'https://portal.liceoexperimental.cl' }
    ],

    sidebar: [
      {
        text: 'Listado',
        items: [
          { text: 'Inicio', link: '/app' },
          { text: 'Funcionarios', link: '/funcionarios' },
          { text: 'Académico', link: '/academico' },
          { text: 'Apoderados', link: '/apoderados' },
          { text: 'Toor', link: '/toor' },
          { text: 'Atrasos', link: '/atrasos' },
          { text: 'Asistencia', link: '/asistencia' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: '#' }
    ],
    
  }
})
