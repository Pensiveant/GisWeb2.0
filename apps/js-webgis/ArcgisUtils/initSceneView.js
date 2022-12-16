import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js";
import SceneView from "https://js.arcgis.com/4.25/@arcgis/core/views/SceneView.js";
import { getTDTImageBaseMap } from "./basemap.js";

/**
 * 加载SceneView
 * @param {*} urlTemplate
 * @param {*} divId
 */
async function initSceneView(divId) {
  const map = new Map({
    basemap: getTDTImageBaseMap("bc583fc978a02e283d437b781f314b51"),
  });
  const view = new SceneView({
    container: divId,
    map: map,
    camera: {
      position: {
        spatialReference: {
          wkid: 4490,
        },
        x: 119.7048288269463,
        y: 27.99616488279615,
        z: 99668.2161660092,
      },
      heading: 354.2874811587114,
      tilt: 47.03419627587757,
    },
  });
  window.view = view;
  return view;
}

export default initSceneView;
