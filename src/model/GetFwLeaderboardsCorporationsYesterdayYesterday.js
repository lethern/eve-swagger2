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
    root.EveSwaggerInterface.GetFwLeaderboardsCorporationsYesterdayYesterday = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetFwLeaderboardsCorporationsYesterdayYesterday model module.
   * @module model/GetFwLeaderboardsCorporationsYesterdayYesterday
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCorporationsYesterdayYesterday</code>.
   * yesterday object
   * @alias module:model/GetFwLeaderboardsCorporationsYesterdayYesterday
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCorporationsYesterdayYesterday</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCorporationsYesterdayYesterday} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCorporationsYesterdayYesterday} The populated <code>GetFwLeaderboardsCorporationsYesterdayYesterday</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('corporation_id'))
        obj.corporationId = ApiClient.convertToType(data['corporation_id'], 'Number');
    }
    return obj;
  }

  /**
   * Amount of kills
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * corporation_id integer
   * @member {Number} corporationId
   */
  exports.prototype.corporationId = undefined;


  return exports;

}));
