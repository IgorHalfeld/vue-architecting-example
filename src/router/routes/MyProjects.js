
import MvMyProjects from '@/components/pages/MvMyProjects/MvMyProjects'
import MyProjectDetails from './MyProjectDetails'

export default {
  path: '/meus-projetos',
  name: 'MyProjects',
  component: MvMyProjects,
  children: [
    { ...MyProjectDetails }
  ]
}
