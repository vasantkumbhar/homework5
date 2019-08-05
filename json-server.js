const product = [{
    "id": "1",
    "name": "Supreme T-Shirt",
    "brand": "Supreme",
    "price": "99.99",
    "options": [
      {
        "color": "blue"
      },
      {
        "size": "XL"
      }
    ],
    "reviews": [
      {
        "customer_name": "John", 
        "review": "This is testing review"
      },
      {
        "customer_name": "Ricky", 
        "review": "This is dummy review"
      },
    ]
  },
  {
    "id": "2",
    "name": "Supreme Shirt",
    "brand": "Supreme",
    "price": "99",
    "options": [
      {
        "color": "red"
      },
      {
        "size": "M"
      }
    ],
    "reviews": [
      {
        "customer_name": "John", 
        "review": "This is testing review for product 2"
      },
      {
        "customer_name": "Ricky", 
        "review": "This is dummy review for product 2"
      },
    ]
  }
];

const users = [{
  "id": "1",
  "name": "User 1",
  "age": "20",
  "address": "dummy address 1"
},
{
  "id": "2",
  "name": "User 2",
  "age": "30",
  "address": "dummy address 2"
}];

const usersCredential = [
  {
    "id": "1",
    "username": "user_1",
    "password": "pwd_1"
  },
  {
    "id": "2",
    "username": "user_2",
    "password": "pwd_2"
  }
]

exports.product = product;
exports.users = users;
exports.usersCredential = usersCredential;