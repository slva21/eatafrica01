import React, { Component, Fragment } from "react";
import SellersNav from "../../components/sellers/sellersNav";
import { Route, Switch } from "react-router-dom";
import Api from "../../server/sellersAPI";
import ordersApi from "../../server/orders";
import stripeApi from "../../server/stripe";
import CityApi from "../../server/cities";
import { toast } from "react-toastify";
import EditDash from "./editDash";
import Menus from "./menus";
import OrdersDash from "./ordersDash";
import MenuArchive from "./menuArchive";
import OrderArchive from "./orderArchive";
import stripe from "../../server/stripe";

class MyKitchen extends Component {
  state = {
    sellerInfo: {
      city: {
        _id: "",
      },
    },
    menu: [],
    cities: [],
    storeNotes: [],
    note: "",
    orders: [],
    newBanner: "",
  };

  async componentDidMount() {
    try {
      const seller = await Api.getSeller(this.props.seller._id);
      let orders = await ordersApi.getSellersOrders(this.props.seller._id);
      const cities = await CityApi.getCities();

      orders = orders.filter(({ status }) => status > 1);
      this.setState({
        sellerInfo: seller.sellerInfo,
        cities,
        storeNotes: seller.sellerInfo.storeNotes,
        menu: seller.menu,
        orders,
      });

      toast(`Welcome back ${this.props.seller.name}!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  handleBannerSubmit = async (e) => {
    console.log(2);
    this.setState({ newBanner: e.target.files[0], loaded: 0 });
  };

  handleRebrandSectionChange = (e) => {
    const sellerInfo = { ...this.state.sellerInfo };
    sellerInfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ sellerInfo });
  };

  handleRebrandSectionSave = async (e) => {
    try {
      e.preventDefault();
      toast.warn("Processing...", {
        position: "top-right",
        autoClose: 2000,
      });

      const body = {
        description: this.state.sellerInfo.description,
        storeName: this.state.sellerInfo.storeName,
        city: this.state.sellerInfo.city._id || this.state.sellerInfo.city,
      };

      await Api.editSeller(this.state.sellerInfo._id, body);

      toast.success("Saved!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  handleNoteChange = (e) => {
    let note = this.state.note;
    note = e.currentTarget.value;
    this.setState({ note });
  };

  handleDeleteNote = async (noteId) => {
    try {
      const storeNotes = await Api.deleteNote(
        this.state.sellerInfo._id,
        noteId
      );

      this.setState({ storeNotes });
    } catch (ex) {
      console.log(ex);
    }
  };

  handleAddNote = async (e) => {
    try {
      e.preventDefault();
      if (this.state.note === "") {
        toast.warn("Well you have to write something...", {
          position: "bottom-center",
          autoClose: 2000,
        });
        return;
      }
      let storeNotes = { ...this.state.storeNotes };
      storeNotes = await Api.addNote(
        this.state.sellerInfo._id,
        this.state.note
      );

      if (!storeNotes) return; // the max has been reached. the sellersApi lest the user know

      toast.success("Done!", {
        position: "top-right",
        autoClose: 2000,
      });

      this.setState({ storeNotes, note: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleEditClick = (id) => {
    this.props.history.push(`/mykitchen/menu/edit/${id}`);
  };

  handleStripeOnboarding = async () => {
    try {
      const link = await stripeApi.getOnBoardingLink(this.props.seller._id);
      toast.success("Hang Tight..", {
        position: "top-center",
        autoClose: 2000,
      });
      window.location = link;
    } catch (error) {}
  };

  handleStripeLoginLink = async () => {
    try {
      const link = await stripeApi.getLoginLink(this.props.seller._id);
      toast.success("Hang Tight..", {
        position: "top-center",
        autoClose: 2000,
      });
      window.location = link;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Fragment>
        <SellersNav />
        <main style={{ marginBottom: 70 }}>
          <Switch>
            <Route
              path="/mykitchen/edit"
              render={(props) => (
                <EditDash
                  {...props}
                  newBanner={this.state.newBanner}
                  seller={this.state.sellerInfo}
                  onbannerSubmit={this.handleBannerSubmit}
                  onBannerUpload={this.handleBannerUpload}
                  cities={this.state.cities}
                  storeNotes={this.state.storeNotes}
                  onDeleteNote={this.handleDeleteNote}
                  onNoteChange={this.handleNoteChange}
                  onAddNote={this.handleAddNote}
                  onRebrandSectionChange={this.handleRebrandSectionChange}
                  onRebrandSectionSave={this.handleRebrandSectionSave}
                  note={this.state.note}
                  onStripeOnboarding={this.handleStripeOnboarding}
                  onStripeLoginLink={this.handleStripeLoginLink}
                />
              )}
            />
            <Route
              path="/mykitchen/menu/edit/:id"
              render={(props) => (
                <MenuArchive {...props} menu={this.state.menu} />
              )}
            />
            <Route
              path="/mykitchen/menu"
              render={(props) => (
                <Menus
                  {...props}
                  menu={this.state.menu}
                  onEditClick={this.handleEditClick}
                />
              )}
            />
            <Route
              path="/mykitchen/orders/:id"
              render={(props) => (
                <OrderArchive
                  orders={this.state.orders}
                  {...props}
                  sellerId={this.props.seller._id}
                />
              )}
            />
            <Route
              path="/mykitchen/orders"
              render={(props) => (
                <OrdersDash
                  orders={this.state.orders}
                  {...props}
                  sellerId={this.props.seller._id}
                />
              )}
            />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default MyKitchen;
