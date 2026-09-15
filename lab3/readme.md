localhost
127.0.0.1 - IP address

ctrl+c - stop the server


every request from client has a pair of {request,response}

npm = node package manager
1.Used to install, run , uninstall any program/project and package
 -- npm install <packageName>
 -- npm uninstall <packageName>

to use npm, the project must be npm project,
to create npm project we can use
 -- npm init -y
 -- it creates a package.json file automaticall 
 package.json holds all the information related to install package from npm
 -- it also create a folder node_modules automaically
 -- node_modules holds the package/libarary file
 -- generally we ignore the node_modules by .gitignore

Nodemon - it restart the server automaticall when file changes, to install

> npm i nodemon -D

Note -D flag will install this package as developer dependency

- to execute any program , update the package.json file then start the srver as
<b> npm run dev </b>

- start -> it will execute the app on deployment
- dev -> it will start server in development phase(only for developer)

- res: it will return contents (json/html/plain) to the user/client
- req: it will retrive the information from client to the server
- server send also statusCodes to the client, that indicates the error/success message

# Status Code
- 200 -> OK
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> forbidden
- 404 -> Not Found
- 500 -> Internal Server Error

## Content Type

- text/plain
- text/html
- application/json
-text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.satatusCode


## send html file to client 

1. html file

- read html file using createReadStream
-pipe it with res object

2. html content 

   send any html tags/content by using
   res.end9('<any html tag>')

## JSON 

Server returns data only not html content because html content will be return by frontend develpoer.
The data is in JSON formate.

JSON always store data in key ,value pair enclosed by { }.
Array can be stored by [ ].
one pair of { } will represent one object abd its properties will be seperated by coma(,)

'''
{
    id:1,
    name:'Mobile',
    price:2500,
    rating:4.5,
    review:200
}
'''



## Headers 
 Header - Is used to tell the client , the type of data send by the server , it may be html files , json file/data, plane text file, css file, any tokens(for login )

1. text/plain -> text file
2. text/html -> html contents/file
3. application/json -> json contents/file
4. text/css -> stylesheet
5. application/form data -> for uploading file
6. application/auth -> for tokens
the headers can be set by res object at server side by two was

7. res.se


