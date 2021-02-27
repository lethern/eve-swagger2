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
    root.EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdContractsContractIdItems200Ok model module.
   * @module model/GetCharactersCharacterIdContractsContractIdItems200Ok
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdContractsContractIdItems200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdContractsContractIdItems200Ok
   * @class
   * @param isIncluded {Boolean} true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
   * @param isSingleton {Boolean} is_singleton boolean
   * @param quantity {Number} Number of items in the stack
   * @param recordId {Number} Unique ID for the item
   * @param typeId {Number} Type ID for item
   */
  var exports = function(isIncluded, isSingleton, quantity, recordId, typeId) {
    this.isIncluded = isIncluded;
    this.isSingleton = isSingleton;
    this.quantity = quantity;
    this.recordId = recordId;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdContractsContractIdItems200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdContractsContractIdItems200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdContractsContractIdItems200Ok} The populated <code>GetCharactersCharacterIdContractsContractIdItems200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('is_included'))
        obj.isIncluded = ApiClient.convertToType(data['is_included'], 'Boolean');
      if (data.hasOwnProperty('is_singleton'))
        obj.isSingleton = ApiClient.convertToType(data['is_singleton'], 'Boolean');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('raw_quantity'))
        obj.rawQuantity = ApiClient.convertToType(data['raw_quantity'], 'Number');
      if (data.hasOwnProperty('record_id'))
        obj.recordId = ApiClient.convertToType(data['record_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
   * @member {Boolean} isIncluded
   */
  exports.prototype.isIncluded = undefined;

  /**
   * is_singleton boolean
   * @member {Boolean} isSingleton
   */
  exports.prototype.isSingleton = undefined;

  /**
   * Number of items in the stack
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
   * @member {Number} rawQuantity
   */
  exports.prototype.rawQuantity = undefined;

  /**
   * Unique ID for the item
   * @member {Number} recordId
   */
  exports.prototype.recordId = undefined;

  /**
   * Type ID for item
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  return exports;

}));
