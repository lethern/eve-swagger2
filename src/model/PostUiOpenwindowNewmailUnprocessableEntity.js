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
    root.EveSwaggerInterface.PostUiOpenwindowNewmailUnprocessableEntity = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostUiOpenwindowNewmailUnprocessableEntity model module.
   * @module model/PostUiOpenwindowNewmailUnprocessableEntity
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>PostUiOpenwindowNewmailUnprocessableEntity</code>.
   * Unprocessable entity
   * @alias module:model/PostUiOpenwindowNewmailUnprocessableEntity
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PostUiOpenwindowNewmailUnprocessableEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostUiOpenwindowNewmailUnprocessableEntity} obj Optional instance to populate.
   * @return {module:model/PostUiOpenwindowNewmailUnprocessableEntity} The populated <code>PostUiOpenwindowNewmailUnprocessableEntity</code> instance.
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
   * Unprocessable entity message
   * @member {String} error
   */
  exports.prototype.error = undefined;


  return exports;

}));
