import React, { Component, useState } from "react";
import Main from "../../components/sellers/edit/main";

const EditDash = (props) => {
  return (
    <Main
      onStripeOnboarding={props.onStripeOnboarding}
      onStripeLoginLink={props.onStripeLoginLink}
      newBanner={props.newBanner}
      onbannerSubmit={props.onbannerSubmit}
      onBannerUpload={props.onBannerUpload}
      seller={props.seller}
      onChange={props.onRebrandSectionChange}
      onNoteChange={props.onNoteChange}
      cities={props.cities}
      onRebrandSectionSave={props.onRebrandSectionSave}
      storeNotes={props.storeNotes}
      onDeleteNote={props.onDeleteNote}
      onAddNote={props.onAddNote}
      note={props.note}
      history={props.history}
    />
  );
};

export default EditDash;
