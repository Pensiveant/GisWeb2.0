import WebTileLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/WebTileLayer.js";
import MapImageLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/MapImageLayer.js";
import IntegratedMeshLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/IntegratedMeshLayer.js";
import SceneLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/SceneLayer.js";
import FeatureLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/FeatureLayer.js";
import TileLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/TileLayer.js";
import VectorTileLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/VectorTileLayer.js";
import ImageryTileLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/ImageryTileLayer.js";
import GeoJSONLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GeoJSONLayer.js";
import GraphicsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GraphicsLayer.js";
import BuildingSceneLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/BuildingSceneLayer.js";
import CSVLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/CSVLayer.js";
import ElevationLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/ElevationLayer.js";
import BingMapsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/BingMapsLayer.js";

// 图层创建工厂方法
let layerFactory = {
  feature: (props) => {
    return new FeatureLayer(props);
  },
  tile: (props) => {
    return new TileLayer(props);
  },
  "vector-tile": (props) => {
    return new VectorTileLayer(props);
  },
  "imagery-tile": (props) => {
    return new ImageryTileLayer(props);
  },
  "map-image": (props) => {
    return new MapImageLayer(props);
  },
  geojson: (props) => {
    return new GeoJSONLayer(props);
  },
  graphics: (props) => {
    return new GraphicsLayer(props);
  },
  "building-scene": (props) => {
    return new BuildingSceneLayer(props);
  },
  scene: (props) => {
    return new SceneLayer(props);
  },
  "web-tile": (props) => {
    return new WebTileLayer(props);
  },
  "integrated-mesh": (props) => {
    // 比如，加载倾斜摄影
    return new IntegratedMeshLayer(props);
  },
  "bing-maps": (props) => {
    return new BingMapsLayer(props);
  },
  csv: (props) => {
    return new CSVLayer(props);
  },
  elevation: (props) => {
    return new ElevationLayer(props);
  },
  "geo-rss": (props) => {
    return new GeoRSSLayer(props);
  },
  imagery: (props) => {
    return new ImageryLayer(props);
  },
  kml: (props) => {
    return new KMLLayer(props);
  },
  "line-of-sight": (props) => {
    return new LineOfSightLayer(props);
  },
  media: (props) => {
    return new MediaLayer(props);
  },
  "ogc-feature": (props) => {
    return new OGCFeatureLayer(props);
  },
  "open-street-map": (props) => {
    return new OpenStreetMapLayer(props);
  },
  "point-cloud": (props) => {
    return new PointCloudLayer(props);
  },
  route: (props) => {
    return new RouteLayer(props);
  },
  stream: (props) => {
    return new StreamLayer(props);
  },
  "subtype-group": (props) => {
    return new SubtypeGroupLayer(props);
  },
  voxel: (props) => {
    return new VoxelLayer(props);
  },
  // OGC
  wcs: (props) => {
    return new WCSLayer(props);
  },
  wfs: (props) => {
    return new WFSLayer(props);
  },
  wms: (props) => {
    return new WMSLayer(props);
  },
  wmts: (props) => {
    return new WMTSLayer(props);
  },
};

function layerCreat(layerProps) {
  const { type } = layerProps;
  const propsClone = { ...layerProps };
  delete propsClone.type;
  const types = Object.keys(layerFactory);
  if (types.includes(type)) {
    const layer = layerFactory[type](propsClone);
    return layer;
  } else {
    throw new Error(`无type='${type}'的图层创建函数，请自己扩展`);
  }
}

export default layerCreat;
