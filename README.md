```
Symmetric-key algorithm
https://en.wikipedia.org/wiki/Symmetric-key_algorithm

asymmetric cryptography
https://en.wikipedia.org/wiki/Public-key_cryptography

command : local: npm start or npm start:dev
command : docker up : docker-compose -f swagger.docker-compose.yml up -d
command : docker down : docker-compose -f swagger.docker-compose.yml down -v --rmi all

health : http://localhost:5001/health

encrypt: 

post : http://localhost:5001/encrypt

{ 
    "plainText": "sample application" 
}

{
    "encryptedData": "aeaded7bf5d1c5090c6563cf9ec372a1d1b53bb83d74183e0363706d40407ed6"
}

decrypt: 

post : http://localhost:5001/decrypt

{
    "encryptedData": "aeaded7bf5d1c5090c6563cf9ec372a1d1b53bb83d74183e0363706d40407ed6"
}

{ 
    "plainText": "sample application" 
}

command : local: npm start or npm start:dev
command : docker up : docker-compose -f crypto.docker-compose.yml up -d
command : docker down : docker-compose -f crypto.docker-compose.yml down -v --rmi all
```
