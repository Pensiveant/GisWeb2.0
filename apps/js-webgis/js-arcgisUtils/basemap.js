import Basemap from "https://js.arcgis.com/4.25/@arcgis/core/Basemap.js";
import layerCreatAsync from "./layerCreatAsync.js";

/**
 * 天地图矢量底图
 * @param key 天地图官网申请的key
 * @returns
 */
function getTDTVectorBaseMap(key) {
  if (!key) {
    throw new Error("天地图官网申请的key必须传入！");
  }
  const mapLayer = layerCreatAsync({
    type: "web-tile",
    urlTemplate: `http://{subDomain}.tianditu.com/vec_w/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&FORMAT=tiles&TILEMATRIXSET=w&STYLE=default&LAYER=vec&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=${key}`,
    subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    title: "天地图矢量",
  });
  const noteLayer = layerCreatAsync({
    type: "web-tile",
    urlTemplate: `http://{subDomain}.tianditu.com/cva_w/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&FORMAT=tiles&TILEMATRIXSET=w&STYLE=default&LAYER=cva&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=${key}`,
    subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    title: "天地图矢量注记",
  });
  const baseMap = new Basemap({
    baseLayers: [mapLayer, noteLayer],
    title: "天地图矢量",
  });
  return baseMap;
}

// 天地图影像底图
function getTDTImageBaseMap(key) {
  if (!key) {
    throw new Error("天地图官网申请的key必须传入！");
  }
  const mapLayer = layerCreatAsync({
    type: "web-tile",
    urlTemplate: `http://{subDomain}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles&tk=${key}`,
    subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    title: "天地图影像",
  });
  const noteLayer = layerCreatAsync({
    type: "web-tile",
    urlTemplate: `http://{subDomain}.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles&tk=${key}`,
    subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    title: "天地图影像注记",
  });
  const baseMap = new Basemap({
    baseLayers: [mapLayer, noteLayer],
    title: "天地图影像",
  });
  return baseMap;
}

export { getTDTVectorBaseMap, getTDTImageBaseMap };
