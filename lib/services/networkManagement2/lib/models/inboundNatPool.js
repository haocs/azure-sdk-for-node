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
 * Initializes a new instance of the InboundNatPool class.
 * @constructor
 * Inbound NAT pool of the loadbalancer
 * @member {string} [name] Gets name of the resource that is unique within a
 * resource group. This name can be used to access the resource
 * 
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated
 * 
 * @member {object} [frontendIPConfiguration] Gets or sets a reference to
 * frontend IP Addresses
 * 
 * @member {string} [frontendIPConfiguration.id] Resource Id
 * 
 * @member {string} protocol Gets or sets the transport potocol for the
 * external endpoint. Possible values are Udp or Tcp. Possible values for
 * this property include: 'Udp', 'Tcp'.
 * 
 * @member {number} frontendPortRangeStart Gets or sets the starting port
 * range for the NAT pool. You can spcify any port number you choose, but the
 * port numbers specified for each role in the service must be unique.
 * Possible values range between 1 and 65535, inclusive
 * 
 * @member {number} frontendPortRangeEnd Gets or sets the ending port range
 * for the NAT pool. You can spcify any port number you choose, but the port
 * numbers specified for each role in the service must be unique. Possible
 * values range between 1 and 65535, inclusive
 * 
 * @member {number} backendPort Gets or sets a port used for internal
 * connections on the endpoint. The localPort attribute maps the eternal port
 * of the endpoint to an internal port on a role. This is useful in scenarios
 * where a role must communicate to an internal compotnent on a port that is
 * different from the one that is exposed externally. If not specified, the
 * value of localPort is the same as the port attribute. Set the value of
 * localPort to '*' to automatically assign an unallocated port that is
 * discoverable using the runtime API
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * PublicIP resource Updating/Deleting/Failed
 * 
 */
function InboundNatPool(parameters) {
  InboundNatPool['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.name !== undefined) {
      this.name = parameters.name;
    }
    if (parameters.etag !== undefined) {
      this.etag = parameters.etag;
    }
    if (parameters.frontendIPConfiguration) {
      this.frontendIPConfiguration = new models['SubResource'](parameters.frontendIPConfiguration);
    }
    if (parameters.protocol !== undefined) {
      this.protocol = parameters.protocol;
    }
    if (parameters.frontendPortRangeStart !== undefined) {
      this.frontendPortRangeStart = parameters.frontendPortRangeStart;
    }
    if (parameters.frontendPortRangeEnd !== undefined) {
      this.frontendPortRangeEnd = parameters.frontendPortRangeEnd;
    }
    if (parameters.backendPort !== undefined) {
      this.backendPort = parameters.backendPort;
    }
    if (parameters.provisioningState !== undefined) {
      this.provisioningState = parameters.provisioningState;
    }
  }    
}

util.inherits(InboundNatPool, models['SubResource']);

/**
 * Validate the payload against the InboundNatPool schema
 *
 * @param {JSON} payload
 *
 */
InboundNatPool.prototype.serialize = function () {
  var payload = InboundNatPool['super_'].prototype.serialize.call(this);
  if (this['name'] !== null && this['name'] !== undefined) {
    if (typeof this['name'].valueOf() !== 'string') {
      throw new Error('this[\'name\'] must be of type string.');
    }
    payload['name'] = this['name'];
  }

  if (this['etag'] !== null && this['etag'] !== undefined) {
    if (typeof this['etag'].valueOf() !== 'string') {
      throw new Error('this[\'etag\'] must be of type string.');
    }
    payload['etag'] = this['etag'];
  }

  if (this['frontendIPConfiguration']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['frontendIPConfiguration'] = this['frontendIPConfiguration'].serialize();
  }

  if (this['protocol'] === null || this['protocol'] === undefined || typeof this['protocol'].valueOf() !== 'string') {
    throw new Error('this[\'protocol\'] cannot be null or undefined and it must be of type string.');
  }
  if (payload['properties'] === null || payload['properties'] === undefined) {
    payload['properties'] = {};
  }
  payload['properties']['protocol'] = this['protocol'];

  if (this['frontendPortRangeStart'] === null || this['frontendPortRangeStart'] === undefined || typeof this['frontendPortRangeStart'] !== 'number') {
    throw new Error('this[\'frontendPortRangeStart\'] cannot be null or undefined and it must be of type number.');
  }
  if (payload['properties'] === null || payload['properties'] === undefined) {
    payload['properties'] = {};
  }
  payload['properties']['frontendPortRangeStart'] = this['frontendPortRangeStart'];

  if (this['frontendPortRangeEnd'] === null || this['frontendPortRangeEnd'] === undefined || typeof this['frontendPortRangeEnd'] !== 'number') {
    throw new Error('this[\'frontendPortRangeEnd\'] cannot be null or undefined and it must be of type number.');
  }
  if (payload['properties'] === null || payload['properties'] === undefined) {
    payload['properties'] = {};
  }
  payload['properties']['frontendPortRangeEnd'] = this['frontendPortRangeEnd'];

  if (this['backendPort'] === null || this['backendPort'] === undefined || typeof this['backendPort'] !== 'number') {
    throw new Error('this[\'backendPort\'] cannot be null or undefined and it must be of type number.');
  }
  if (payload['properties'] === null || payload['properties'] === undefined) {
    payload['properties'] = {};
  }
  payload['properties']['backendPort'] = this['backendPort'];

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
 * Deserialize the instance to InboundNatPool schema
 *
 * @param {JSON} instance
 *
 */
InboundNatPool.prototype.deserialize = function (instance) {
  InboundNatPool['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['name'] !== undefined) {
      this['name'] = instance['name'];
    }

    if (instance['etag'] !== undefined) {
      this['etag'] = instance['etag'];
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['frontendIPConfiguration']) {
        this['frontendIPConfiguration'] = new models['SubResource']().deserialize(instance['properties']['frontendIPConfiguration']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['protocol'] !== undefined) {
        this['protocol'] = instance['properties']['protocol'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['frontendPortRangeStart'] !== undefined) {
        this['frontendPortRangeStart'] = instance['properties']['frontendPortRangeStart'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['frontendPortRangeEnd'] !== undefined) {
        this['frontendPortRangeEnd'] = instance['properties']['frontendPortRangeEnd'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['backendPort'] !== undefined) {
        this['backendPort'] = instance['properties']['backendPort'];
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

module.exports = InboundNatPool;