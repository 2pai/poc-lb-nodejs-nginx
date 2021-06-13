# POC: Nginx for loadbalancing & caching NodeJS Application

## Demo
1. ssh into nginx VM using vagrant cli
`vagrant ssh nginx`
2. run app using pm2
`pm2 start index.js --name "{app-name}" -- {port} {app-name}`
Example : `pm2 start index.js --name "app-01" -- 3022 app-1`