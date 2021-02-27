/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.7.15
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdBookmarksItem = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdBookmarksItem model module.
   * @module model/GetCharactersCharacterIdBookmarksItem
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdBookmarksItem</code>.
   * Optional object that is returned if a bookmark was made on a particular item.
   * @alias module:model/GetCharactersCharacterIdBookmarksItem
   * @class
   * @param itemId {Number} item_id integer
   * @param typeId {Number} type_id integer
   */
  var exports = function(itemId, typeId) {
    this.itemId = itemId;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdBookmarksItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdBookmarksItem} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdBookmarksItem} The populated <code>GetCharactersCharacterIdBookmarksItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('item_id'))
        obj.itemId = ApiClient.convertToType(data['item_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * item_id integer
   * @member {Number} itemId
   */
  exports.prototype.itemId = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  return exports;

}));