import { Table,Button } from 'reactstrap'
import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import * as cartActions from "../../redux/actions/cartActions"

 class CartDetail extends Component {
     renderDetail(){
         return (
            <div>
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Price</th>

                
                <th></th>
             
              </tr>
            </thead>
            <tbody>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.unitPrice}$</td>
              
                <td><Button color="danger" onClick={()=>this.props.actions.removeFromCart(cartItem.product)}>X</Button></td>
              </tr>
            ))}
              </tbody>
              </Table>
        </div>
         )
     }
    render() {
        return (
         <div>
         {this.props.cart.length>0?this.renderDetail():<div><h1>Your Cart is Empty</h1></div>}
         </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
      actions: {
          removeFromCart: bindActionCreators(
          cartActions.removeFromCart,
          dispatch
        )
        
      }
    }
  }
  
  function  mapStateToProps(state){
    return {
       cart : state.cartReducer
    
    }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);