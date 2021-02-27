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
    define(['ApiClient', 'model/GetCharactersCharacterIdFwStatsKills', 'model/GetCharactersCharacterIdFwStatsVictoryPoints'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdFwStatsKills'), require('./GetCharactersCharacterIdFwStatsVictoryPoints'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdFwStatsOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdFwStatsKills, root.EveSwaggerInterface.GetCharactersCharacterIdFwStatsVictoryPoints);
  }
}(this, function(ApiClient, GetCharactersCharacterIdFwStatsKills, GetCharactersCharacterIdFwStatsVictoryPoints) {
  'use strict';

  /**
   * The GetCharactersCharacterIdFwStatsOk model module.
   * @module model/GetCharactersCharacterIdFwStatsOk
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdFwStatsOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdFwStatsOk
   * @class
   * @param kills {module:model/GetCharactersCharacterIdFwStatsKills} 
   * @param victoryPoints {module:model/GetCharactersCharacterIdFwStatsVictoryPoints} 
   */
  var exports = function(kills, victoryPoints) {
    this.kills = kills;
    this.victoryPoints = victoryPoints;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdFwStatsOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdFwStatsOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdFwStatsOk} The populated <code>GetCharactersCharacterIdFwStatsOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('current_rank'))
        obj.currentRank = ApiClient.convertToType(data['current_rank'], 'Number');
      if (data.hasOwnProperty('enlisted_on'))
        obj.enlistedOn = ApiClient.convertToType(data['enlisted_on'], 'Date');
      if (data.hasOwnProperty('faction_id'))
        obj.factionId = ApiClient.convertToType(data['faction_id'], 'Number');
      if (data.hasOwnProperty('highest_rank'))
        obj.highestRank = ApiClient.convertToType(data['highest_rank'], 'Number');
      if (data.hasOwnProperty('kills'))
        obj.kills = GetCharactersCharacterIdFwStatsKills.constructFromObject(data['kills']);
      if (data.hasOwnProperty('victory_points'))
        obj.victoryPoints = GetCharactersCharacterIdFwStatsVictoryPoints.constructFromObject(data['victory_points']);
    }
    return obj;
  }

  /**
   * The given character's current faction rank
   * @member {Number} currentRank
   */
  exports.prototype.currentRank = undefined;

  /**
   * The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare
   * @member {Date} enlistedOn
   */
  exports.prototype.enlistedOn = undefined;

  /**
   * The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare
   * @member {Number} factionId
   */
  exports.prototype.factionId = undefined;

  /**
   * The given character's highest faction rank achieved
   * @member {Number} highestRank
   */
  exports.prototype.highestRank = undefined;

  /**
   * @member {module:model/GetCharactersCharacterIdFwStatsKills} kills
   */
  exports.prototype.kills = undefined;

  /**
   * @member {module:model/GetCharactersCharacterIdFwStatsVictoryPoints} victoryPoints
   */
  exports.prototype.victoryPoints = undefined;


  return exports;

}));
