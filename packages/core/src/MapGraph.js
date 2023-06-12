import GraphHelpers from "./GraphHelpers.js";
import MapDictionary from "./MapDictionary.js";

/**
 * A graph of Map objects.
 *
 * @typedef {import("@graphorigami/types").AsyncMutableGraph} AsyncMutableGraph
 * @implements {AsyncMutableGraph}
 */
export default class MapGraph extends MapDictionary {
  async get(key) {
    let value = await super.get(key);
    if (GraphHelpers.isAsyncDictionary(value)) {
      value = Reflect.construct(this.constructor, [value]);
    }
    return value;
  }
}
