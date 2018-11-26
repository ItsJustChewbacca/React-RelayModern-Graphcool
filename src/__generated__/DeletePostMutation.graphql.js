/**
 * @flow
 * @relayHash 270f1206a2104c515f4c529ee92ec638
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePostInput = {
  id: string,
  clientMutationId: string,
};
export type DeletePostMutationVariables = {|
  input: DeletePostInput
|};
export type DeletePostMutationResponse = {|
  +deletePost: ?{|
    +deletedId: ?string
  |}
|};
export type DeletePostMutation = {|
  variables: DeletePostMutationVariables,
  response: DeletePostMutationResponse,
|};
*/


/*
mutation DeletePostMutation(
  $input: DeletePostInput!
) {
  deletePost(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeletePostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deletePost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeletePostInput!"
      }
    ],
    "concreteType": "DeletePostPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeletePostMutation",
  "id": null,
  "text": "mutation DeletePostMutation(\n  $input: DeletePostInput!\n) {\n  deletePost(input: $input) {\n    deletedId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeletePostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeletePostMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '19df18787c76c5a44dee131a2acd30b9';
module.exports = node;
