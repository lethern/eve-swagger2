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
    root.EveSwaggerInterface.PostFleetsFleetIdWingsWingIdSquadsCreated = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostFleetsFleetIdWingsWingIdSquadsCreated model module.
   * @module model/PostFleetsFleetIdWingsWingIdSquadsCreated
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>PostFleetsFleetIdWingsWingIdSquadsCreated</code>.
   * 201 created object
   * @alias module:model/PostFleetsFleetIdWingsWingIdSquadsCreated
   * @class
   * @param squadId {Number} The squad_id of the newly created squad
   */
  var exports = function(squadId) {
    this.squadId = squadId;
  };

  /**
   * Constructs a <code>PostFleetsFleetIdWingsWingIdSquadsCreated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostFleetsFleetIdWingsWingIdSquadsCreated} obj Optional instance to populate.
   * @return {module:model/PostFleetsFleetIdWingsWingIdSquadsCreated} The populated <code>PostFleetsFleetIdWingsWingIdSquadsCreated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('squad_id'))
        obj.squadId = ApiClient.convertToType(data['squad_id'], 'Number');
    }
    return obj;
  }

  /**
   * The squad_id of the newly created squad
   * @member {Number} squadId
   */
  exports.prototype.squadId = undefined;


  return exports;

}));
