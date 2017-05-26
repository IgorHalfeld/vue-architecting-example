
import services from './services'

export default function $services (Vue, options) {
  services.forEach(service => // eslint-disable-line
    Vue.prototype[service.name] = service.handler
  )
}
