## Database Design

At first, I thought of creating the database with 5 tables. Later, I decided to add a table for services or repairs because my initial idea was that every repair would require at least one part. But then I realized that in an auto repair shop, there are common repairs where you already know exactly which parts are needed. So I added a table called "repairs" with an N-to-M relationship with the parts table.

In the end, I decided that a customer and a vehicle can have many orders. I also assumed that an order has a one-to-one relationship with a repair service. In the future, it might be a good idea to change that to a many-to-many relationship between orders and repair services.

The final database design diagram is in the `database-diagram.png` file

## Backend Implementation

To run the project, just open Docker and run the following command: `docker-compose up -d`. This will create two containers. One for the API and one for the database.

- The API documentation is on the `beloz.postman_collection.json` file. You can import it in Postman and see all the available endpoints.

- The architecture follow is hexagonal architecture where we separate in layers: domain, application (use cases) and infrastructure (controller and persistence).

- For this system, I decided to group all the things related to customers and vehicles into the customer management module and all the things related to orders, repairs and parts into the workshop management module.

- One limitation is that the number of parts per repair is fixed at 1. In the future, this could be changed so that the client can specify how many parts are needed for each repair.
