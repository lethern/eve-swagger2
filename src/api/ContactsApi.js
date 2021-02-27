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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetAlliancesAllianceIdContacts200Ok', 'model/GetAlliancesAllianceIdContactsLabels200Ok', 'model/GetCharactersCharacterIdContacts200Ok', 'model/GetCharactersCharacterIdContactsLabels200Ok', 'model/GetCorporationsCorporationIdContacts200Ok', 'model/GetCorporationsCorporationIdContactsLabels200Ok', 'model/InternalServerError', 'model/PostCharactersCharacterIdContactsError520', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetAlliancesAllianceIdContacts200Ok'), require('../model/GetAlliancesAllianceIdContactsLabels200Ok'), require('../model/GetCharactersCharacterIdContacts200Ok'), require('../model/GetCharactersCharacterIdContactsLabels200Ok'), require('../model/GetCorporationsCorporationIdContacts200Ok'), require('../model/GetCorporationsCorporationIdContactsLabels200Ok'), require('../model/InternalServerError'), require('../model/PostCharactersCharacterIdContactsError520'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.ContactsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetAlliancesAllianceIdContacts200Ok, root.EveSwaggerInterface.GetAlliancesAllianceIdContactsLabels200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdContacts200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdContactsLabels200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdContacts200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdContactsLabels200Ok, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.PostCharactersCharacterIdContactsError520, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetAlliancesAllianceIdContacts200Ok, GetAlliancesAllianceIdContactsLabels200Ok, GetCharactersCharacterIdContacts200Ok, GetCharactersCharacterIdContactsLabels200Ok, GetCorporationsCorporationIdContacts200Ok, GetCorporationsCorporationIdContactsLabels200Ok, InternalServerError, PostCharactersCharacterIdContactsError520, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Contacts service.
   * @module api/ContactsApi
   * @version 1.7.15
   */

  /**
   * Constructs a new ContactsApi. 
   * @alias module:api/ContactsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCharactersCharacterIdContacts operation.
     * @callback module:api/ContactsApi~deleteCharactersCharacterIdContactsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete contacts
     * Bulk delete contacts  --- 
     * @param {Number} characterId An EVE character ID
     * @param {Array.<Number>} contactIds A list of contacts to delete
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/ContactsApi~deleteCharactersCharacterIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCharactersCharacterIdContacts = function(characterId, contactIds, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling deleteCharactersCharacterIdContacts");
      }

      // verify the required parameter 'contactIds' is set
      if (contactIds === undefined || contactIds === null) {
        throw new Error("Missing the required parameter 'contactIds' when calling deleteCharactersCharacterIdContacts");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
        'contact_ids': {
          value: contactIds,
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/characters/{character_id}/contacts/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesAllianceIdContacts operation.
     * @callback module:api/ContactsApi~getAlliancesAllianceIdContactsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAlliancesAllianceIdContacts200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alliance contacts
     * Return contacts of an alliance  ---  This route is cached for up to 300 seconds
     * @param {Number} allianceId An EVE alliance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/ContactsApi~getAlliancesAllianceIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAlliancesAllianceIdContacts200Ok>}
     */
    this.getAlliancesAllianceIdContacts = function(allianceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling getAlliancesAllianceIdContacts");
      }


      var pathParams = {
        'alliance_id': allianceId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetAlliancesAllianceIdContacts200Ok];

      return this.apiClient.callApi(
        '/v2/alliances/{alliance_id}/contacts/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesAllianceIdContactsLabels operation.
     * @callback module:api/ContactsApi~getAlliancesAllianceIdContactsLabelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAlliancesAllianceIdContactsLabels200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alliance contact labels
     * Return custom labels for an alliance's contacts  ---  This route is cached for up to 300 seconds
     * @param {Number} allianceId An EVE alliance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/ContactsApi~getAlliancesAllianceIdContactsLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAlliancesAllianceIdContactsLabels200Ok>}
     */
    this.getAlliancesAllianceIdContactsLabels = function(allianceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling getAlliancesAllianceIdContactsLabels");
      }


      var pathParams = {
        'alliance_id': allianceId
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
      var returnType = [GetAlliancesAllianceIdContactsLabels200Ok];

      return this.apiClient.callApi(
        '/v1/alliances/{alliance_id}/contacts/labels/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdContacts operation.
     * @callback module:api/ContactsApi~getCharactersCharacterIdContactsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdContacts200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contacts
     * Return contacts of a character  ---  This route is cached for up to 300 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/ContactsApi~getCharactersCharacterIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdContacts200Ok>}
     */
    this.getCharactersCharacterIdContacts = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdContacts");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetCharactersCharacterIdContacts200Ok];

      return this.apiClient.callApi(
        '/v2/characters/{character_id}/contacts/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdContactsLabels operation.
     * @callback module:api/ContactsApi~getCharactersCharacterIdContactsLabelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdContactsLabels200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contact labels
     * Return custom labels for a character's contacts  ---  This route is cached for up to 300 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/ContactsApi~getCharactersCharacterIdContactsLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdContactsLabels200Ok>}
     */
    this.getCharactersCharacterIdContactsLabels = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdContactsLabels");
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
      var returnType = [GetCharactersCharacterIdContactsLabels200Ok];

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/contacts/labels/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdContacts operation.
     * @callback module:api/ContactsApi~getCorporationsCorporationIdContactsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdContacts200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation contacts
     * Return contacts of a corporation  ---  This route is cached for up to 300 seconds
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/ContactsApi~getCorporationsCorporationIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdContacts200Ok>}
     */
    this.getCorporationsCorporationIdContacts = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdContacts");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetCorporationsCorporationIdContacts200Ok];

      return this.apiClient.callApi(
        '/v2/corporations/{corporation_id}/contacts/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdContactsLabels operation.
     * @callback module:api/ContactsApi~getCorporationsCorporationIdContactsLabelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdContactsLabels200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation contact labels
     * Return custom labels for a corporation's contacts  ---  This route is cached for up to 300 seconds
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/ContactsApi~getCorporationsCorporationIdContactsLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdContactsLabels200Ok>}
     */
    this.getCorporationsCorporationIdContactsLabels = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdContactsLabels");
      }


      var pathParams = {
        'corporation_id': corporationId
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
      var returnType = [GetCorporationsCorporationIdContactsLabels200Ok];

      return this.apiClient.callApi(
        '/v1/corporations/{corporation_id}/contacts/labels/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCharactersCharacterIdContacts operation.
     * @callback module:api/ContactsApi~postCharactersCharacterIdContactsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add contacts
     * Bulk add contacts with same settings  --- 
     * @param {Number} characterId An EVE character ID
     * @param {Array.<module:model/Number>} contactIds A list of contacts
     * @param {Number} standing Standing for the contact
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Array.<Number>} opts.labelIds Add custom labels to the new contact
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {Boolean} opts.watched Whether the contact should be watched, note this is only effective on characters (default to false)
     * @param {module:api/ContactsApi~postCharactersCharacterIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.postCharactersCharacterIdContacts = function(characterId, contactIds, standing, opts, callback) {
      opts = opts || {};
      var postBody = contactIds;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling postCharactersCharacterIdContacts");
      }

      // verify the required parameter 'contactIds' is set
      if (contactIds === undefined || contactIds === null) {
        throw new Error("Missing the required parameter 'contactIds' when calling postCharactersCharacterIdContacts");
      }

      // verify the required parameter 'standing' is set
      if (standing === undefined || standing === null) {
        throw new Error("Missing the required parameter 'standing' when calling postCharactersCharacterIdContacts");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'standing': standing,
        'token': opts['token'],
        'watched': opts['watched'],
      };
      var collectionQueryParams = {
        'label_ids': {
          value: opts['labelIds'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/v2/characters/{character_id}/contacts/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCharactersCharacterIdContacts operation.
     * @callback module:api/ContactsApi~putCharactersCharacterIdContactsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit contacts
     * Bulk edit contacts with same settings  --- 
     * @param {Number} characterId An EVE character ID
     * @param {Array.<module:model/Number>} contactIds A list of contacts
     * @param {Number} standing Standing for the contact
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Array.<Number>} opts.labelIds Add custom labels to the contact
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {Boolean} opts.watched Whether the contact should be watched, note this is only effective on characters (default to false)
     * @param {module:api/ContactsApi~putCharactersCharacterIdContactsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putCharactersCharacterIdContacts = function(characterId, contactIds, standing, opts, callback) {
      opts = opts || {};
      var postBody = contactIds;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling putCharactersCharacterIdContacts");
      }

      // verify the required parameter 'contactIds' is set
      if (contactIds === undefined || contactIds === null) {
        throw new Error("Missing the required parameter 'contactIds' when calling putCharactersCharacterIdContacts");
      }

      // verify the required parameter 'standing' is set
      if (standing === undefined || standing === null) {
        throw new Error("Missing the required parameter 'standing' when calling putCharactersCharacterIdContacts");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'standing': standing,
        'token': opts['token'],
        'watched': opts['watched'],
      };
      var collectionQueryParams = {
        'label_ids': {
          value: opts['labelIds'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/characters/{character_id}/contacts/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
