import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import * as cartActions from "../../redux/actions/cartActions"
import {Link} from "react-router-dom"

import {
  
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,

  
  } from 'reactstrap';

 

 class CartSummary extends Component {

  
   renderEmpty(){
     return(
       <div>
       <NavItem>
       <NavLink>
       Empty Cart
       </NavLink>
      
       </NavItem>
       </div>
     )
   }

  renderSummary(){

    return (
      <div>
      <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Options
      </DropdownToggle>
      <DropdownMenu right>
      
        {this.props.cart.map(cartItem => (
          <Link to="/cart">
          <DropdownItem key={cartItem.product.id}>
          <Badge  color="danger" onClick={()=>this.props.actions.removeFromCart(cartItem.product)}>X</Badge>
          {cartItem.product.productName}
          <Badge color="success">{cartItem.quantity}</Badge>
          </DropdownItem>
          </Link>
        
        ))}
     
        <DropdownItem divider />
        <Link to="/cart">  
        <DropdownItem>
          Go To Cart
        </DropdownItem>
        </Link>
     
      </DropdownMenu>
    </UncontrolledDropdown>
      </div>
    )
  }
    render() {
        return (
           <div>
           {this.props.cart.length>0 ? this.renderSummary(): this.renderEmpty()}
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);