import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"



const app = express();
app.use(express.json());

let cars = [
    {id :1 , model:"tata"},       
    {id :2 , model:"kia"},
    {id :3 , model:"mahindra"}
]


const options = {
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "Node.js API project",
            version: "1.0.0"
        },
        servers:[
            {
                url: "http://localhost:8080/"
            }
        ]
    },
    apis:[
        "./index.js"
    ]
};


//.....................creating swegger........................//
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//.....................simple get method......................//
/**
 * @swagger
 *  components:
 *    schemas:
 *      car:
 *        type: object
 *        properties:
 *           id:
 *             type: string
 *           model:
 *             type: string
 */
/**
 * @swagger
 * /data:
 *     get:
 *       summary: get book information
 *       description: this API returns book information.
 *       responses:
 *        200:
 *         description: successful response with book data.
 *         content:
 *               application/json:
 *                 schema:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/car'
 *                         
: */

//...........get data............................//

app.get("/data", (req, res)=>{
    res.status(200).json(cars);
    console.log("hello")   
});

app.listen(8080,() =>{
    console.log("server has started on 8080")
})