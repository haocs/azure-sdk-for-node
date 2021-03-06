/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the IssuerCredentials class.
 * @constructor
 * The credentials to be used for the certificate issuer.
 *
 * @member {string} [accountId] The user name/account name/account id.
 * 
 * @member {string} [password] The password/secret/account key.
 * 
 */
function IssuerCredentials() {
}

/**
 * Defines the metadata of IssuerCredentials
 *
 * @returns {object} metadata of IssuerCredentials
 *
 */
IssuerCredentials.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'IssuerCredentials',
    type: {
      name: 'Composite',
      className: 'IssuerCredentials',
      modelProperties: {
        accountId: {
          required: false,
          serializedName: 'account_id',
          type: {
            name: 'String'
          }
        },
        password: {
          required: false,
          serializedName: 'pwd',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = IssuerCredentials;
