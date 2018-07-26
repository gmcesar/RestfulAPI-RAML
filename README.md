# RestfulAPI-RAML
Example of RestfulAPI designed in RAML and built in Node.js

## RAML spec

- `\RestfulAPI-RAML\assets\api.raml`

## Installation

- Node and npm
- Clone the repo: `git clone https://github.com/gmcesar/RestfulAPI-RAML.git`
- Install dependencies: `npm install`
- Start the server: `node server.js`

## Commentaries

### Use Case 1:

- Consumes an endpoint using the GET method and the parameter 'copy' to request the API to maintain a copy of the customer. An interface was created based on the specific requirements for the consumer, allowing it (the consumer) to access only the resources needed.

`The endpoint for this consumer: http://localhost:4000/api/c/customers/`

### Use Case 2:

- The mobile device consumes an endpoint using the GET (retrieve customer) and PUT (update customer) methods. This endpoint belongs to an additional interface created for this specific use case (mobile consumers) to emulate a consumer experience-based API and allows:

        a. Scope limitation to the core API(i.e. only retrieve and update customer details per requirement).
        b. Control and optimise resource allocation to mobile traffic to cater to limitations such as connection speed and data usage/cost.
    
`Endpoint for mobile consumers: http://localhost:4000/api/m/customers/`

### Use Case 3:

- The design of the API allows the extension to support future resources due to:

        a. The RAML specification was designed and optimised to allow easy integration of new resources due to the implementation of 'Resource Types' and 'Traits'.
        b. Creation of additional interfaces per consumer as this would allow new methods to be exposed to consumers only per required.

### Design Decisions:

- It was decided to create a core API that contains the resource (costumer) and all its methods (i.e. List, create, update, delete). This allows the API to easily support future resources.

- Two additional interfaces were created and customised for Use Case 1 and Use Case 2 as each one of these reflected the requirements of different consumers. This decision represents several advantages as it prevents direct access to the core API and all its methods and resources. It also allows exposing small components of specific functionalities.
