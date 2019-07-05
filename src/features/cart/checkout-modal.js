import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import _ from 'lodash'

const CheckoutModal = (props) => (
  <Modal trigger={<Button>Checkout</Button>}>
    <Modal.Header>Checkout</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <table>
          <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                </tr>
          </thead>
          {
            _.sortBy(props.cart, 'id').map(item => <tr key={item.id}>
                <td>{item.name} (${item.price})</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
            )
          }
          <tr>
            <td></td>
            <td></td>
            {
              _.sum(props.cart.map(item => item.price * item.quantity))
                ? <td>${_.sum(props.cart.map(item => item.price * item.quantity))}</td>
                : null
            }
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <Button>Confirm</Button>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default CheckoutModal