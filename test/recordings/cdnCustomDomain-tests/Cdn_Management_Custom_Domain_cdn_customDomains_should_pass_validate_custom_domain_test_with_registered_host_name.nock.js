// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5157/providers/Microsoft.Cdn/profiles/cdnTestProfile6002/endpoints/testEndpoint-06466c93-ab2d-4268-b3ec-38bbc2a12e90/validateCustomDomain?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"customDomainValidated\":true,\"message\":null,\"reason\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'b881cfff-de01-46aa-9abf-7a2c7a41160a',
  'x-ms-client-request-id': '9e94abc6-b6fb-4ac8-8025-0d15cdc6d769',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b22de24d-1287-44e0-ab5f-38f1a82b24fb',
  'x-ms-routing-request-id': 'WESTUS:20160511T231955Z:b22de24d-1287-44e0-ab5f-38f1a82b24fb',
  date: 'Wed, 11 May 2016 23:19:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5157/providers/Microsoft.Cdn/profiles/cdnTestProfile6002/endpoints/testEndpoint-06466c93-ab2d-4268-b3ec-38bbc2a12e90/validateCustomDomain?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"customDomainValidated\":true,\"message\":null,\"reason\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'b881cfff-de01-46aa-9abf-7a2c7a41160a',
  'x-ms-client-request-id': '9e94abc6-b6fb-4ac8-8025-0d15cdc6d769',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b22de24d-1287-44e0-ab5f-38f1a82b24fb',
  'x-ms-routing-request-id': 'WESTUS:20160511T231955Z:b22de24d-1287-44e0-ab5f-38f1a82b24fb',
  date: 'Wed, 11 May 2016 23:19:54 GMT',
  connection: 'close' });
 return result; }]];