# scalapay-node
A Node.js module for scalapay api
## Installation 
```sh
npm install @miaburton/scalapay-node --save
yarn add @miaburton/scalapay-node
```

## Usage
### Javascript
```javascript
var scalaClient = require('@miaburton/scalapay-node')
var client = new scalaClient(API_KEY, CONFIRM_URL, FAILURE_URL)

//Create order
client.createOrder(orderDetal)

//Capture payment
client.capture(token)

//Refund
client.refund(token ,refund)
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { ScalaClient } from '@miaburton/scalapay-node'

const client = new ScalaClient(API_KEY, CONFIRM_URL, FAILURE_URL)

//Create order
client.createOrder(orderDetal)

//Capture payment
client.capture(token)

//Refund
client.refund(token ,refund)
```
## Enable sandbox env
On inizialization set `sandbox` parameter to true

## Test 
```sh
npm run test
```
