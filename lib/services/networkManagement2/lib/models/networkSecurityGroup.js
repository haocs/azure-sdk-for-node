/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NetworkSecurityGroup class.
 * @constructor
 * NetworkSecurityGroup resource
 * @member {string} [etag] Gets a unique read-only string that changes
 * whenever the resource is updated
 * 
 * @member {array} [securityRules] Gets or sets Security rules of network
 * security group
 * 
 * @member {array} [defaultSecurityRules] Gets or sets Default security rules
 * of network security group
 * 
 * @member {array} [networkInterfaces] Gets collection of references to
 * Network Interfaces
 * 
 * @member {array} [subnets] Gets collection of references to subnets
 * 
 * @member {string} [resourceGuid] Gets or sets resource guid property of the
 * network security group resource
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * PublicIP resource Updating/Deleting/Failed
 * 
 */
function NetworkSecurityGroup(parameters) {
  NetworkSecurityGroup['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.etag !== undefined) {
      this.etag = parameters.etag;
    }
    if (parameters.securityRules) {
      var tempParameterssecurityRules = [];
      parameters.securityRules.forEach(function(element) {
        if (element) {
          element = new models['SecurityRule'](element);
        }
        tempParameterssecurityRules.push(element);
      });
      this.securityRules = tempParameterssecurityRules;
    }
    if (parameters.defaultSecurityRules) {
      var tempParametersdefaultSecurityRules = [];
      parameters.defaultSecurityRules.forEach(function(element1) {
        if (element1) {
          element1 = new models['SecurityRule'](element1);
        }
        tempParametersdefaultSecurityRules.push(element1);
      });
      this.defaultSecurityRules = tempParametersdefaultSecurityRules;
    }
    if (parameters.networkInterfaces) {
      var tempParametersnetworkInterfaces = [];
      parameters.networkInterfaces.forEach(function(element2) {
        if (element2) {
          element2 = new models['NetworkInterface'](element2);
        }
        tempParametersnetworkInterfaces.push(element2);
      });
      this.networkInterfaces = tempParametersnetworkInterfaces;
    }
    if (parameters.subnets) {
      var tempParameterssubnets = [];
      parameters.subnets.forEach(function(element3) {
        if (element3) {
          element3 = new models['Subnet'](element3);
        }
        tempParameterssubnets.push(element3);
      });
      this.subnets = tempParameterssubnets;
    }
    if (parameters.resourceGuid !== undefined) {
      this.resourceGuid = parameters.resourceGuid;
    }
    if (parameters.provisioningState !== undefined) {
      this.provisioningState = parameters.provisioningState;
    }
  }    
}

util.inherits(NetworkSecurityGroup, models['Resource']);

/**
 * Validate the payload against the NetworkSecurityGroup schema
 *
 * @param {JSON} payload
 *
 */
NetworkSecurityGroup.prototype.serialize = function () {
  var payload = NetworkSecurityGroup['super_'].prototype.serialize.call(this);
  if (this['etag'] !== null && this['etag'] !== undefined) {
    if (typeof this['etag'].valueOf() !== 'string') {
      throw new Error('this[\'etag\'] must be of type string.');
    }
    payload['etag'] = this['etag'];
  }

  if (util.isArray(this['securityRules'])) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['securityRules'] = [];
    for (var i = 0; i < this['securityRules'].length; i++) {
      if (this['securityRules'][i]) {
        payload['properties']['securityRules'][i] = this['securityRules'][i].serialize();
      }
    }
  }

  if (util.isArray(this['defaultSecurityRules'])) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['defaultSecurityRules'] = [];
    for (var i1 = 0; i1 < this['defaultSecurityRules'].length; i1++) {
      if (this['defaultSecurityRules'][i1]) {
        payload['properties']['defaultSecurityRules'][i1] = this['defaultSecurityRules'][i1].serialize();
      }
    }
  }

  if (util.isArray(this['networkInterfaces'])) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['networkInterfaces'] = [];
    for (var i2 = 0; i2 < this['networkInterfaces'].length; i2++) {
      if (this['networkInterfaces'][i2]) {
        payload['properties']['networkInterfaces'][i2] = this['networkInterfaces'][i2].serialize();
      }
    }
  }

  if (util.isArray(this['subnets'])) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['subnets'] = [];
    for (var i3 = 0; i3 < this['subnets'].length; i3++) {
      if (this['subnets'][i3]) {
        payload['properties']['subnets'][i3] = this['subnets'][i3].serialize();
      }
    }
  }

  if (this['resourceGuid'] !== null && this['resourceGuid'] !== undefined) {
    if (typeof this['resourceGuid'].valueOf() !== 'string') {
      throw new Error('this[\'resourceGuid\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['resourceGuid'] = this['resourceGuid'];
  }

  if (this['provisioningState'] !== null && this['provisioningState'] !== undefined) {
    if (typeof this['provisioningState'].valueOf() !== 'string') {
      throw new Error('this[\'provisioningState\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['provisioningState'] = this['provisioningState'];
  }

  return payload;
};

/**
 * Deserialize the instance to NetworkSecurityGroup schema
 *
 * @param {JSON} instance
 *
 */
NetworkSecurityGroup.prototype.deserialize = function (instance) {
  NetworkSecurityGroup['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['etag'] !== undefined) {
      this['etag'] = instance['etag'];
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['securityRules']) {
        var tempInstancepropertiessecurityRules = [];
        instance['properties']['securityRules'].forEach(function(element4) {
          if (element4) {
            element4 = new models['SecurityRule']().deserialize(element4);
          }
          tempInstancepropertiessecurityRules.push(element4);
        });
        this['securityRules'] = tempInstancepropertiessecurityRules;
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['defaultSecurityRules']) {
        var tempInstancepropertiesdefaultSecurityRules = [];
        instance['properties']['defaultSecurityRules'].forEach(function(element5) {
          if (element5) {
            element5 = new models['SecurityRule']().deserialize(element5);
          }
          tempInstancepropertiesdefaultSecurityRules.push(element5);
        });
        this['defaultSecurityRules'] = tempInstancepropertiesdefaultSecurityRules;
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['networkInterfaces']) {
        var tempInstancepropertiesnetworkInterfaces = [];
        instance['properties']['networkInterfaces'].forEach(function(element6) {
          if (element6) {
            element6 = new models['NetworkInterface']().deserialize(element6);
          }
          tempInstancepropertiesnetworkInterfaces.push(element6);
        });
        this['networkInterfaces'] = tempInstancepropertiesnetworkInterfaces;
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['subnets']) {
        var tempInstancepropertiessubnets = [];
        instance['properties']['subnets'].forEach(function(element7) {
          if (element7) {
            element7 = new models['Subnet']().deserialize(element7);
          }
          tempInstancepropertiessubnets.push(element7);
        });
        this['subnets'] = tempInstancepropertiessubnets;
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['resourceGuid'] !== undefined) {
        this['resourceGuid'] = instance['properties']['resourceGuid'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['provisioningState'] !== undefined) {
        this['provisioningState'] = instance['properties']['provisioningState'];
      }
    }
  }

  return this;
};

module.exports = NetworkSecurityGroup;