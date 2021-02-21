import React, { Component } from "react";
import Api from "../../server/menuApi";
import categories from "../../categories";
import menuTypes from "../../menuTypes";
import Main from "../../components/sellers/menuArchive/main";
import uniqid from "uniqid";
import { toast } from "react-toastify";

class MenuArchive extends Component {
  state = {
    menu: {
      options: [],
    },
    categories,
    menuTypes,
    isOptionToggle: false,
  };

  async componentDidMount() {
    const menu = await Api.getMenu(this.props.match.params.id);
    this.setState({ menu });
  }

  handleOptionToggle = () => {
    this.setState({ isOptionToggle: !this.state.isOptionToggle });
  };

  handleMenuSave = async () => {
    toast.warn(`Processing...`, {
      position: "top-right",
      autoClose: 2000,
    });
    try {
      let menu = { ...this.state.menu };
      menu.__v++;
      await Api.saveMenu(this.props.match.params.id, menu);
      toast.success(`Saved! 🎉`, {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(`Something went wrong... `, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  handleAddOption = () => {
    let menu = { ...this.state.menu };
    menu.options.push({ _id: uniqid(), price: 0, name: "" });
    this.setState({ menu });
  };

  handleDeleteOption = (_id) => {
    let menu = { ...this.state.menu };
    const options = menu.options.filter(({ _id: n }) => n !== _id);
    menu.options = options;
    this.setState({ menu });
  };

  handleMenuChange = (e) => {
    let menu = { ...this.state.menu };
    menu[e.currentTarget.name] = e.currentTarget.value;
    if (e.currentTarget.name == "price") {
      menu[e.currentTarget.name] = parseFloat(e.currentTarget.value).toFixed(2);
    }
    this.setState({ menu });
  };

  handleOptionChange = (e) => {
    let menu = { ...this.state.menu };
    let index = menu.options.findIndex(({ _id }) => _id == e.currentTarget.id);
    menu.options[index][e.currentTarget.name] = e.currentTarget.value;
    this.setState({ menu });
  };

  render() {
    return (
      <Main
        onMenuSave={this.handleMenuSave}
        onOptionChange={this.handleOptionChange}
        menu={this.state.menu}
        onAddOption={this.handleAddOption}
        onMenuChange={this.handleMenuChange}
        onDeleteOption={this.handleDeleteOption}
        categories={this.state.categories}
        menuTypes={this.state.menuTypes}
        onOptionToggle={this.handleOptionToggle}
        isOptionToggle={this.state.isOptionToggle}
      />
    );
  }
}

export default MenuArchive;
