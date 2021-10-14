import { Text } from '../components'
import deliveryMan from '../assets/delivery-man.png'
import Form from '../components/Form'

const Home = () => (
  <div>
    <Text as="h1" color="secondary" large>
      Hola!
    </Text>
    <Text small>Revisemos como viene tu envío</Text>
    <img src={deliveryMan} alt="Delivery man" />
    <Text as="button" bold uppercase>
      Aceptar
    </Text>
    <Form />
  </div>
)

export default Home
