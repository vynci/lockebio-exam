# Locke Bio Technical Exam (Vince Elizaga)

## Install dependencies

`$ npm install`

## Development

`$ npm run dev`

## Endpoints

### Create order

**POST** _~/order_

Payload (sample)

```json
{
  "integrationName": "healthmart",
  "order": {
    "product": "Producy XYZ",
    "quantity": 8,
    "customerInfo": {
      "name": "Random Name",
      "address": "123 Random Street",
      "city": "Random City",
      "state": "Random State",
      "zipCode": "62362623",
      "country": "Random Country"
    }
  }
}
```

### List orders

**GET** _~/orders_

## Unit test

`$ npm test`

## Build

`$ npm run build`
