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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdOpportunities200Ok', 'model/GetOpportunitiesGroupsGroupIdOk', 'model/GetOpportunitiesTasksTaskIdOk', 'model/InternalServerError', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdOpportunities200Ok'), require('../model/GetOpportunitiesGroupsGroupIdOk'), require('../model/GetOpportunitiesTasksTaskIdOk'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.OpportunitiesApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdOpportunities200Ok, root.EveSwaggerInterface.GetOpportunitiesGroupsGroupIdOk, root.EveSwaggerInterface.GetOpportunitiesTasksTaskIdOk, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdOpportunities200Ok, GetOpportunitiesGroupsGroupIdOk, GetOpportunitiesTasksTaskIdOk, InternalServerError, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Opportunities service.
   * @module api/OpportunitiesApi
   * @version 1.7.15
   */

  /**
   * Constructs a new OpportunitiesApi. 
   * @alias module:api/OpportunitiesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdOpportunities operation.
     * @callback module:api/OpportunitiesApi~getCharactersCharacterIdOpportunitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdOpportunities200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a character's completed tasks
     * Return a list of tasks finished by a character  ---  This route is cached for up to 3600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/OpportunitiesApi~getCharactersCharacterIdOpportunitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdOpportunities200Ok>}
     */
    this.getCharactersCharacterIdOpportunities = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdOpportunities");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdOpportunities200Ok];

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/opportunities/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOpportunitiesGroups operation.
     * @callback module:api/OpportunitiesApi~getOpportunitiesGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get opportunities groups
     * Return a list of opportunities groups  ---  This route expires daily at 11:05
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/OpportunitiesApi~getOpportunitiesGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getOpportunitiesGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/v1/opportunities/groups/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOpportunitiesGroupsGroupId operation.
     * @callback module:api/OpportunitiesApi~getOpportunitiesGroupsGroupIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOpportunitiesGroupsGroupIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get opportunities group
     * Return information of an opportunities group  ---  This route expires daily at 11:05
     * @param {Number} groupId ID of an opportunities group
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.acceptLanguage Language to use in the response (default to en)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:model/String} opts.language Language to use in the response, takes precedence over Accept-Language (default to en)
     * @param {module:api/OpportunitiesApi~getOpportunitiesGroupsGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOpportunitiesGroupsGroupIdOk}
     */
    this.getOpportunitiesGroupsGroupId = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getOpportunitiesGroupsGroupId");
      }


      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'language': opts['language'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage'],
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetOpportunitiesGroupsGroupIdOk;

      return this.apiClient.callApi(
        '/v1/opportunities/groups/{group_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOpportunitiesTasks operation.
     * @callback module:api/OpportunitiesApi~getOpportunitiesTasksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get opportunities tasks
     * Return a list of opportunities tasks  ---  This route expires daily at 11:05
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/OpportunitiesApi~getOpportunitiesTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getOpportunitiesTasks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/v1/opportunities/tasks/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOpportunitiesTasksTaskId operation.
     * @callback module:api/OpportunitiesApi~getOpportunitiesTasksTaskIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOpportunitiesTasksTaskIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get opportunities task
     * Return information of an opportunities task  ---  This route expires daily at 11:05
     * @param {Number} taskId ID of an opportunities task
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/OpportunitiesApi~getOpportunitiesTasksTaskIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOpportunitiesTasksTaskIdOk}
     */
    this.getOpportunitiesTasksTaskId = function(taskId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling getOpportunitiesTasksTaskId");
      }


      var pathParams = {
        'task_id': taskId
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetOpportunitiesTasksTaskIdOk;

      return this.apiClient.callApi(
        '/v1/opportunities/tasks/{task_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
