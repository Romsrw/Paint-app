import React from "react";
import toolState from "../store/toolState";
import "../styles/toolbar.scss";

const SettingBar = () => {
  return (
    <div className="settingbar">
      <label style={{ marginLeft: "10px" }} htmlFor="line-width">
        Толщина линии
      </label>
      <input
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        style={{ margin: "0 10px" }}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label style={{ marginLeft: "10px" }} htmlFor="stroke-color">
        Цвет обводки
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
