import React from "react";
import FoodPicUpload from "../menus/menuFactory/foodPicUpload";
import { useSpring, animated } from "react-spring";
import ImageUpload from "../reusable/imageUpload";
import EditForm1 from "./editForm1";
import EditOptions from "./editOptions";

const Main = ({
  menu,
  categories,
  menuTypes,
  onOptionToggle,
  onAddOption,
  onDeleteOption,
  isOptionToggle,
  onMenuChange,
  onOptionChange,
  onMenuSave,
}) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: 500, opacity: 1 },
  });

  return (
    <animated.div style={propss}>
      <main>
        <FoodPicUpload menu={menu} />
        {!isOptionToggle && (
          <EditForm1
            onMenuSave={onMenuSave}
            onMenuChange={onMenuChange}
            menu={menu}
            categories={categories}
            menuTypes={menuTypes}
            onOptionToggle={onOptionToggle}
          />
        )}
        {isOptionToggle && (
          <EditOptions
            onMenuSave={onMenuSave}
            onOptionChange={onOptionChange}
            onOptionToggle={onOptionToggle}
            menu={menu}
            onAddOption={onAddOption}
            onDeleteOption={onDeleteOption}
          />
        )}
      </main>
    </animated.div>
  );
};

export default Main;
