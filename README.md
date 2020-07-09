# scalapay-js
A Node.js module for scalapay api
## Installation
```sh
npm install @mia-burton/scalapay-js --save
yarn add @mia-burton/scalapay-js
```

## Usage
### Javascript
```javascript
var scalaClient = require('@mia-burton/scalapay-js')
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
import { ScalaClient } from '@mia-burton/scalapay-js'

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
