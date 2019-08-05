Homehowrk 5 Guideline - 

1. To autenticate user
	POST Call - http://localhost:8000/api/auth
	Request Body:
	{
		"username": "user_1",
		"password": "pwd_1"
	}
2. GET Call:
	http://localhost:8000/api/products

	Header:
	Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEiLCJpYXQiOjE1NjUwMDY1MTgsImV4cCI6MTU2NTAxMDExOH0.9dxKozDnWXxmQ9igQxYgsJMvgrtXly3VgUJggVft8oI


Homework 4 Guideline - 

1. To run plain text-server run below command,
	node plain-text-server.js
2. To run html-server run below command,
	node html-server.js
3. To run all Get and Post call please run below commands,
	npm start - command will execute below API

Get - 
	1. http://localhost:8000/api/products 
	2. http://localhost:8000/api/products/1 
	3. http://localhost:8000/api/products/1/reviews 
	4. http://localhost:8000/api/products/users 

POST - 

	http://localhost:8000/api/products
	
	Req body:
	{
		"name": "Shirt",
		"brand": "VP",
		"price": "100",
		"options": [
			{
			"color": "Red"
			},
			{
			"size": "L"
			}
		],
		"reviews": []
	}
	
