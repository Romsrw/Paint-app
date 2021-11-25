import React from "react";
import toolState from "../store/toolState";
import "../styles/toolbar.scss";

const SettingBar = () => {
  return (
    <div className="settingbar">
      <label className="settingbar__label" htmlFor="line-width">
        Толщина линии:
      </label>
      <input
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label className="settingbar__label" htmlFor="stroke-color">
        Цвет обводки:
      </label>
      <input
        type="color"
        id="stroke-color"
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
      />
    </div>
  );
};

export default SettingBar;
