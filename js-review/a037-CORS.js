//From course "Advanced Javascript" in Udemy

/*

- CORS is the way private apis are protected against unauthorized REQUESTS.

- the way CORS works is simple: when the client makes a GET request to the server,
it checks that both client and server have the same origin url authorized in
the http header.

- if the client makes other requests like PUT or POST, before modifying any data
in the server the browser sends what is called a PRE-FLIGHT request that checks if
the server would authorize the http operation from this particular client.




get request
header
origin: moo.com

response from server
header must have
access-control-allow-origin: moo.com

if it is a public server: access-control-allow-origin: *

if access-control-allow-origin is not the same: response blocked



PRE-FLIGHT REQUEST
* ask the server if it will accept the http verb from us

header
access-control-request-method: PUT
origin: moo.com


response from server
header must have
access-control-allow-origin: moo.com
access-control-request-methods: PUT


* if accepted, then the request is sent


IF WE GET A CORS ERROR, WE NEED TO FIX IT AT THE SERVER
* the server response header needs to accept our url as origin
* the server response header needs to accept the http method we want to use



FETCH ALLOWS US TO MAKE NO-CORS REQUESTS
https://jakearchibald.com/2015/thats-so-fetch/

* you can't read the content of the response as it could contain private information, but it can be consumed by other APIs.

*/


//CORS: security protocol to request data from an external server api (different origins).

//CORS requires that the http request and response headers match.
//If the client is not included in the list of allowed clients in the server,
//the data will not be passed.

//PRE-FLIGHT is when the client sends an http request to the server
//asking if one particular http verb would be accepted (e.g. PUT)



//Solution in development: create a proxy with webpack
http://www.avitzurel.com/blog/2016/07/19/using-webpack-to-proxy-to-your-local-web-server-to-avoid-cross-site-errors/

//How To Overcome CORS issues with Redux React Express and Node
http://stackoverflow.com/questions/38749103/how-to-overcome-cors-issues-with-redux-react-express-and-node

// All I really needed was the ability to launch a server side function (get resources from external API) from the client side event (load component). Sort of like how submitting a form, has an action that launches a server side function.
// In my component:

componentDidMount() {
    const product_api_results = productApi.getProductItems()
    console.log('product_api_results in CART Component: ', product_api_results)
    /* now I have results and can put it in the Redux Store via action to reducer for other components to work with on client */
  }
// The productAPI.getProductItems() that the component calls:

export function getProductItems () {
  return axios.get('/api/get-products') // triggers a server side route
    .then(function (response) {
      console.log('client side response: ', response)
      return response
    })
}
// In Express server.js file, the server will see this url and then get the proper data. The shopify.get() is from the shopify-node-api module:

app.get('/api/get-products', function (req, res) { // '/api/get-products' called from client
  shopify.get('/admin/products.json', function (err, data, headers) {
    res.send(data)
  })
})
