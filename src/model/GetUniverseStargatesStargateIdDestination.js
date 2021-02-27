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
    root.EveSwaggerInterface.GetUniverseStargatesStargateIdDestination = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetUniverseStargatesStargateIdDestination model module.
   * @module model/GetUniverseStargatesStargateIdDestination
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>GetUniverseStargatesStargateIdDestination</code>.
   * destination object
   * @alias module:model/GetUniverseStargatesStargateIdDestination
   * @class
   * @param stargateId {Number} The stargate this stargate connects to
   * @param systemId {Number} The solar system this stargate connects to
   */
  var exports = function(stargateId, systemId) {
    this.stargateId = stargateId;
    this.systemId = systemId;
  };

  /**
   * Constructs a <code>GetUniverseStargatesStargateIdDestination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseStargatesStargateIdDestination} obj Optional instance to populate.
   * @return {module:model/GetUniverseStargatesStargateIdDestination} The populated <code>GetUniverseStargatesStargateIdDestination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('stargate_id'))
        obj.stargateId = ApiClient.convertToType(data['stargate_id'], 'Number');
      if (data.hasOwnProperty('system_id'))
        obj.systemId = ApiClient.convertToType(data['system_id'], 'Number');
    }
    return obj;
  }

  /**
   * The stargate this stargate connects to
   * @member {Number} stargateId
   */
  exports.prototype.stargateId = undefined;

  /**
   * The solar system this stargate connects to
   * @member {Number} systemId
   */
  exports.prototype.systemId = undefined;


  return exports;

}));
