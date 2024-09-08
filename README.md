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
I spent 3 hours on this test. I'd add a few other features, such as redux without losing the data if you refresh the page, create more design, create a login page or show whether you're the manager or the customer, so you can validate and send it to the kitchen and start production
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

Now it is used in a different way, we don't need to create the store in the redux toolkit, now we can only configure the reducer and I needed to create the orderSlice to create the functions of the reducer and that's it.

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
I was trying to access the API, but I had some problems with CORS, so I had to change the header in the json files, and create a user-friendly design that any user could understand how it works and access correctly

### 4. What mechanism did you put in place to track down issues in production on this code? If you didn’t put anything, write down what you could do.
In order not to stop, I created some validations to check that the data was correct and some consoles to see if they were working. I added redux to save the state between pages, but for the API, for example, I would create a json file to store the API information, so if I couldn't access the service, I would check the saved JSON

### 5. The Wiremock represents one source of information. We should be prepared to integrate with more sources. List the steps that we would need to take to add more sources of items with diferent formats and promotions
For the steps, we must create a way of 
1 - Define the new data sources and formats, whether they will be JSON, CSV or third-party services. 
2 - Create data processing that can transform data from different formats into a format we can use.
3 - Implement error handling 
4 - Create interface methods to search for all items, promotions, out of stock
5 - Update the promotion to handle different promotion formats, so create combos 
6 - Testing, end-to-end testing to cover the flow of data
7 - Validating that the methods and logic are working




## Other Information
I added docker to run the frontend, I was getting some errors when running start.sh in the dockerfile, so I just opened the terminal and ran 
```
docker compose up
```

and run the java server in another terminal

and it can now be tested on port http://localhost:3000




