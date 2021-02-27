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
    root.EveSwaggerInterface.PostCharactersCharacterIdContactsError520 = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostCharactersCharacterIdContactsError520 model module.
   * @module model/PostCharactersCharacterIdContactsError520
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>PostCharactersCharacterIdContactsError520</code>.
   * Error 520
   * @alias module:model/PostCharactersCharacterIdContactsError520
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PostCharactersCharacterIdContactsError520</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCharactersCharacterIdContactsError520} obj Optional instance to populate.
   * @return {module:model/PostCharactersCharacterIdContactsError520} The populated <code>PostCharactersCharacterIdContactsError520</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'String');
    }
    return obj;
  }

  /**
   * Error 520 message
   * @member {String} error
   */
  exports.prototype.error = undefined;


  return exports;

}));