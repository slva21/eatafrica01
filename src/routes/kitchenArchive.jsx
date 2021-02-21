import React, { Component } from "react";
import { getKitchens } from "../fakesellers";
import Main from "../components/kitchenArchive/main";
import categories from "../categories";
import menuTypes from "../menuTypes";
import Api from "../server/sellersAPI";

class KitchenArchive extends Component {
  state = {
    Kitchens: getKitchens(),
    currentKitchen: {},
    menu: [],
    sellerInfo: {
      origin: {
        name: "loading",
      },
      city: {
        name: "loading",
      },
      stars: 1,
    },
    dropDownList: menuTypes,
    formControlList: categories,
    dropDownTitle: "Type",
    currentType: "All",
    currentCategory: "Select",
  };

  async componentDidMount() {
    let currentKitchen = {};
    const currentKitchenId = this.props.match.params.id;
    if (this.props.kitchens.length == 0) {
      currentKitchen = await Api.getSeller(currentKitchenId);
    } else {
      currentKitchen = this.props.kitchens.find(
        ({ sellerInfo: m }) => m._id == currentKitchenId
      );
    }

    const menu = [...currentKitchen.menu];
    const sellerInfo = { ...currentKitchen.sellerInfo };

    this.setState({ currentKitchen, menu, sellerInfo });
  }

  handleDropDownSelect = (m) => {
    let currentType = this.state.currentType;
    currentType = m;
    this.setState({ currentType });
  };

  handleFormSelectChange = (e) => {
    let currentCategory = this.state.currentCategory;
    currentCategory = e.currentTarget.value;
    this.setState({ currentCategory });
  };

  render() {
    const {
      menu,
      sellerInfo,
      formControlList,
      currentType,
      currentCategory,
    } = this.state;

    let filteredByType =
      currentType !== "All" ? menu.filter((m) => m.type === currentType) : menu;

    let filteredByCategory =
      currentCategory !== "Select"
        ? filteredByType.filter(
            (m) => m.category === currentCategory.toLowerCase()
          )
        : filteredByType;

    return (
      <Main
        menu={filteredByCategory}
        sellerInfo={sellerInfo}
        dropDownList={this.state.dropDownList}
        dropDownTitle={this.state.dropDownTitle}
        onDropDownSelect={this.handleDropDownSelect}
        formControlList={formControlList}
        currentType={currentType}
        onFormSelectChange={this.handleFormSelectChange}
      />
    );
  }
}

export default KitchenArchive;
