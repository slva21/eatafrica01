import React from "react";
import EditKitchen from "./editKitchen";
import CreateKitchen from "./createKitchen";
import StripeSetup from "./StripeSetup";
import KitchenNotes from "./kitchenNotes";
import BannerUpload from "./bannerUpload";
import ImageUpload from "../reusable/imageUpload";
import { useSpring, animated } from "react-spring";

const Main = (props) => {
  const {
    seller,
    onChange,
    cities,
    onRebrandSectionSave,
    storeNotes,
    onDeleteNote,
    onNoteChange,
    onAddNote,
    note,
    onbannerSubmit,
    onBannerUpload,
    newBanner,
    onStripeOnboarding,
    onStripeLoginLink,
  } = props;

  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: 500, opacity: 1 },
  });

  return (
    <main className="mt-2">
      <animated.div style={propss}>
        {/* <CreateKitchen /> */}
        <ImageUpload
          className="mt-2"
          seller={seller}
          onbannerSubmit={onbannerSubmit}
          onBannerUpload={onBannerUpload}
          newBanner={newBanner}
        />
        <KitchenNotes
          storeNotes={storeNotes}
          onDeleteNote={onDeleteNote}
          onNoteChange={onNoteChange}
          onAddNote={onAddNote}
          note={note}
        />
        {/* <BannerUpload /> */}
        <EditKitchen
          seller={seller}
          onChange={onChange}
          cities={cities}
          onSaveDetails={onRebrandSectionSave}
        />
        <StripeSetup
          onStripeOnboarding={onStripeOnboarding}
          onStripeLoginLink={onStripeLoginLink}
        />
      </animated.div>
    </main>
  );
};

export default Main;
