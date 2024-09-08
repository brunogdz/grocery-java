This "wiremock" directory contains a set of tools that would allow you to spin up a mock JSON API and consume the relevant in any language you wish.

./start.sh to start mock server
./stop.sh to stop mock server

### List of all products
**GET http://localhost:8081/products**

### Product information
**GET http://localhost:8081/products/{productId}**

**Note:** The productIds of all items can be retrieved via the  **/products** call

## Follow up questions

### 1. How long did you spend on the test? What would you add if you had more time? 
I spent 3 hours on this test, I would add some other functionalities like redux without losing the data if refresh the page, create more design, creating a login page or show if is the manager or the customer, so can validate and dispatch to the kitchen and start the production
### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Redux, I used the kit and created the store info, the code is:
```
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slices/orderSlice';

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export default store;
```

now it uses in a different way, we don't need to create the store on the redux toolkit, now we can only setup the reducer and I needed to create the orderSlice to create the reducers functions and is done.

```
const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
        console.log("adding the order", state.confirmedOrders, action)
      state.confirmedOrders.push(action.payload);
    },
    clearOrders: (state) => {
      state.confirmedOrders = [];
    },
  },
});
```
### 3. What did you find most difficult?
I was trying to access the api but I got some issues with the CORS, so I needed to change on the json files the header, and creating a friendly design that any user could understand how works and could access properly

### 4. What mechanism did you put in place to track down issues in production on this code? If you didn’t put anything, write down what you could do.
to not stop I created some validations to check if getting correct the data, and some consoles to see if was working. I added redux so it's saving the state between the pages, but for the API for example I'd create a json file to store the info from the api, so if wasn't possible to access the service I will check on the JSON saved

### 5. The Wiremock represents one source of information. We should be prepared to integrate with more sources. List the steps that we would need to take to add more sources of items with diferent formats and promotions
For the steps we should create a way to 
1 - define the new data sources and the formats, if will be as JSON, CSV or third-app services. 
2 - Create a data processing so can transform the data from different formats into a format that we can use.
3 - Implement error handling 
4 - Create interface methods so can fetch all the items, promotions, outofStock
5 - Update the promotion to handle different promotion formats, so create combos 
6 - Testing, end-to-end testes to cover the data flow
7 - Validation if the methods and the logic is working





