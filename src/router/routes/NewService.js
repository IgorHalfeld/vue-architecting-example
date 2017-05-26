import MvNewService from '@/components/pages/MvNewService/MvNewService'
import MyProjects from './MyProjects'

export default {
  path: '/novo-atendimento',
  name: 'NewService',
  component: MvNewService,
  children: [
    { ...MyProjects }
  ]
}
