/**
 * @flow
 * @relayHash bf9ea0a53368205271a52e322dce8041
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePageViewerQueryVariables = {||};
export type CreatePageViewerQueryResponse = {|
  +viewer: {|
    +id: string
  |}
|};
export type CreatePageViewerQuery = {|
  variables: CreatePageViewerQueryVariables,
  response: CreatePageViewerQueryResponse,
|};
*/


/*
query CreatePageViewerQuery {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CreatePageViewerQuery",
  "id": null,
  "text": "query CreatePageViewerQuery {\n  viewer {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePageViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePageViewerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a52e470382e019e94d38b6bbbdb0e7a3';
module.exports = node;
