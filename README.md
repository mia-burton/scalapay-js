# scalapay-node
A Node.js module for scalapay api
## Installation
```sh
npm install @mia-burton/scalapay-node --save
yarn add @mia-burton/scalapay-node
```

## Usage
### Javascript
```javascript
var scalaClient = require('@mia-burton/scalapay-node')
var client = new scalaClient(API_KEY, CONFIRM_URL, FAILURE_URL)

//Create order
client.createOrder(orderDetail)

//Capture payment
client.capture(token)

//Refund
client.refund(token ,refund)
```

### TypeScript
```typescript
import { ScalaClient } from '@mia-burton/scalapay-node'

const client = new ScalaClient(API_KEY, CONFIRM_URL, FAILURE_URL)

//Create order
client.createOrder(orderDetail)

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
