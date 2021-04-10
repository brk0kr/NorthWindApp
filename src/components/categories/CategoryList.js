import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectedCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  };
  render() {
    return (
      <div>
        <h1>
          <Badge>Category List</Badge>
        </h1>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName ===
                this.props.currentCategory.categoryName
                  ? true
                  : false
              }
              onClick={() => this.selectedCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h3>Selected Category:{this.props.currentCategory.categoryName}</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
