import express from "express"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
   


const app = express()
app.use(express.json());  

let students =[
    {Sr:1,Name:"robin",PhoneNo:987654321,},
    {Sr:2,Name:"omi",PhoneNo:21234567890},
    {Sr:3,Name:"rohit",PhoneNo:7654323453},
    {Sr:4,Name:"puneet",PhoneNo:675894324}

]

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{title:"Node js API project",
        version: "1.0.0"
    },
    server:[
        {
            url:"http://localhost:8080/"
        }
    ]
    },
    apis:[
        "./data.js"
    ]
};
//---------create swagger-----------//
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs",)


