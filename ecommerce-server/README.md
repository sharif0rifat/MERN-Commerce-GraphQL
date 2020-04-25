##How to run

npm install
npm run build
npm start

Or

docker-compose build
docker-compose up

### Step1 : Register a user

http://localhost:3000/api/user/register

JSON:

{
	"username": "demo",
	"password": "demo"
}

## Create a Product

http://localhost:3000/api/products

Header:

Content-Type: application/json

Authorization: Bearer token

JSON:

{
  "productId": "1",
  "name": "laptop",
  "price": 1200,
  "quantity": 1
}