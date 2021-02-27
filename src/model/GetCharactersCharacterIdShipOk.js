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
    root.EveSwaggerInterface.GetCharactersCharacterIdShipOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdShipOk model module.
   * @module model/GetCharactersCharacterIdShipOk
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdShipOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdShipOk
   * @class
   * @param shipItemId {Number} Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
   * @param shipName {String} ship_name string
   * @param shipTypeId {Number} ship_type_id integer
   */
  var exports = function(shipItemId, shipName, shipTypeId) {
    this.shipItemId = shipItemId;
    this.shipName = shipName;
    this.shipTypeId = shipTypeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdShipOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdShipOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdShipOk} The populated <code>GetCharactersCharacterIdShipOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ship_item_id'))
        obj.shipItemId = ApiClient.convertToType(data['ship_item_id'], 'Number');
      if (data.hasOwnProperty('ship_name'))
        obj.shipName = ApiClient.convertToType(data['ship_name'], 'String');
      if (data.hasOwnProperty('ship_type_id'))
        obj.shipTypeId = ApiClient.convertToType(data['ship_type_id'], 'Number');
    }
    return obj;
  }

  /**
   * Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
   * @member {Number} shipItemId
   */
  exports.prototype.shipItemId = undefined;

  /**
   * ship_name string
   * @member {String} shipName
   */
  exports.prototype.shipName = undefined;

  /**
   * ship_type_id integer
   * @member {Number} shipTypeId
   */
  exports.prototype.shipTypeId = undefined;


  return exports;

}));
