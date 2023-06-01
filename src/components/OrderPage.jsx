import React, {useContext, useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/CartContext';

export default function OrderPage({cartList}) {
    const [orderId, setOrderId] = useState("");
    const {removeList, total} = useContext(CartContext);
    const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
	})

    const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}))
	}

    const sendOrder = () =>{
        const order = {
			buyer: formValues,
			items: cartList,
            date: Date(),
			total: total
		}

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

		addDoc(orderCollection, order).then(response => {
			if (response.id) {
				setOrderId(response.id);
                removeList();
			}
		})
        
    }

  return (
    <Container>
        {orderId ? 
        <div style={{border: '1px solid lightgreen', backgroundColor: '#e8ffde', borderRadius: '3px', marginTop: "3vh"}}>
            <h2 style={{margin: '2vh'}}>Se realizo tu compra correctamente, tu numero de orden es: {orderId}</h2>
        </div>  :
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:'4vh'}}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="example@example.com" name="email" required onChange={handleChange} value={formValues.email}/>
            <Form.Text className="text-muted">
            Te vamos a robar todos los datos.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" required minLength="3" name="name" onChange={handleChange} value={formValues.name}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="tel" minLength="10" maxLength="10" name="phone" required onChange={handleChange} value={formValues.phone}/>
        </Form.Group>
        {formValues.name.length > 3 && formValues.phone.length > 9 && formValues.email.includes('@') ?
        <Button variant="primary" type="button" style={{backgroundColor: 'green'}} onClick={sendOrder}>
            Finalizar Orden
        </Button>:
        <Button style={{backgroundColor: 'grey'}}>
            Finalizar Orden
        </Button>}
        </Form>
        }
        
    </Container>
  )
}
