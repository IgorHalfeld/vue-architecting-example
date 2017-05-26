import MvMyProjectDetails from '@/components/pages/MvMyProjectDetails/MvMyProjectDetails'

export default {
  path: '/meu-projeto/:id',
  name: 'MyProjectDetails',
  component: MvMyProjectDetails,
  meta: {
    breadcrumb: 'Meu Projeto'
  }
}
