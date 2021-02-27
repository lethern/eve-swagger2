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
    define(['ApiClient', 'model/GetFwLeaderboardsActiveTotalActiveTotal', 'model/GetFwLeaderboardsLastWeekLastWeek', 'model/GetFwLeaderboardsYesterdayYesterday'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsActiveTotalActiveTotal'), require('./GetFwLeaderboardsLastWeekLastWeek'), require('./GetFwLeaderboardsYesterdayYesterday'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsKills = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwLeaderboardsActiveTotalActiveTotal, root.EveSwaggerInterface.GetFwLeaderboardsLastWeekLastWeek, root.EveSwaggerInterface.GetFwLeaderboardsYesterdayYesterday);
  }
}(this, function(ApiClient, GetFwLeaderboardsActiveTotalActiveTotal, GetFwLeaderboardsLastWeekLastWeek, GetFwLeaderboardsYesterdayYesterday) {
  'use strict';

  /**
   * The GetFwLeaderboardsKills model module.
   * @module model/GetFwLeaderboardsKills
   * @version 1.7.15
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsKills</code>.
   * Top 4 rankings of factions by number of kills from yesterday, last week and in total
   * @alias module:model/GetFwLeaderboardsKills
   * @class
   * @param activeTotal {Array.<module:model/GetFwLeaderboardsActiveTotalActiveTotal>} Top 4 ranking of factions active in faction warfare by total kills. A faction is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @param lastWeek {Array.<module:model/GetFwLeaderboardsLastWeekLastWeek>} Top 4 ranking of factions by kills in the past week
   * @param yesterday {Array.<module:model/GetFwLeaderboardsYesterdayYesterday>} Top 4 ranking of factions by kills in the past day
   */
  var exports = function(activeTotal, lastWeek, yesterday) {
    this.activeTotal = activeTotal;
    this.lastWeek = lastWeek;
    this.yesterday = yesterday;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsKills</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsKills} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsKills} The populated <code>GetFwLeaderboardsKills</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active_total'))
        obj.activeTotal = ApiClient.convertToType(data['active_total'], [GetFwLeaderboardsActiveTotalActiveTotal]);
      if (data.hasOwnProperty('last_week'))
        obj.lastWeek = ApiClient.convertToType(data['last_week'], [GetFwLeaderboardsLastWeekLastWeek]);
      if (data.hasOwnProperty('yesterday'))
        obj.yesterday = ApiClient.convertToType(data['yesterday'], [GetFwLeaderboardsYesterdayYesterday]);
    }
    return obj;
  }

  /**
   * Top 4 ranking of factions active in faction warfare by total kills. A faction is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @member {Array.<module:model/GetFwLeaderboardsActiveTotalActiveTotal>} activeTotal
   */
  exports.prototype.activeTotal = undefined;

  /**
   * Top 4 ranking of factions by kills in the past week
   * @member {Array.<module:model/GetFwLeaderboardsLastWeekLastWeek>} lastWeek
   */
  exports.prototype.lastWeek = undefined;

  /**
   * Top 4 ranking of factions by kills in the past day
   * @member {Array.<module:model/GetFwLeaderboardsYesterdayYesterday>} yesterday
   */
  exports.prototype.yesterday = undefined;


  return exports;

}));