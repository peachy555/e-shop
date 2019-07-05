import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import _ from 'lodash'

const CheckoutModal = (props) => (
  <Modal trigger={<Button className='checkout-table btn lg'>Checkout</Button>}>
    <Modal.Header>Checkout</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <table className='checkout-modal'>
          <thead>
                <tr>
                  <th className='checkout-modal head name'>Item (Unit Price)</th>
                  <th className='checkout-modal head quantity'>Quantity</th>
                  <th className='checkout-modal head price'>Price</th>
                </tr>
          </thead>
          {
            _.sortBy(props.cart, 'id').map(item => <tr key={item.id}>
                <td className='checkout-modal item name'>{item.name} (${item.price})</td>
                <td className='checkout-modal item quantity'>{item.quantity}</td>
                <td className='checkout-modal item price'>${item.price * item.quantity}</td>
              </tr>
            )
          }
          <tr>
            <td className='checkout-modal item name bold'>Total</td>
            <td></td>
            {
              _.sum(props.cart.map(item => item.price * item.quantity))
                ? <td className='checkout-modal item price bold'>${_.sum(props.cart.map(item => item.price * item.quantity))}</td>
                : <td className='checkout-modal item price bold'></td>
            }
          </tr>
        </table>
        <Button>Confirm</Button>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default CheckoutModal