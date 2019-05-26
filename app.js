const di = require('./dynamo-interface');
di.putItem('test_entity',
{
    "id": {"S": "0514de43-5dd0-4c24-ace2-test"},
    "name": {"S": "Admin Approval Entity"},
    "phone": {"S":"1231231234"},
    "status": {"S" :"approved"},
    "createdBy":{"S":"{\"id\":\"00u1f90o2324Si9zp2p7\",\"name\":\"Jared Jnes\",\"email\":\"Jared.Jnes@c.com\"}"},
    "address": {"M":
                    {  "city" : { "S" : "Austin" },  "countryCode" : { "S" : "US" },  "postalCode" : { "S" : "78757" },  
                    "region" : { "S" : "TX" },  "street" : { "S" : "123 address" },  "subRegion" : { "S" : "Travis County" }
                }
    }
},
(error, data) => {
    if(error) console.log(error);
    if(data) console.log(data);
});
/*
di.getAllItems('test_entity', (error, data) => {
    if(error) console.log(error);
    if(data) console.log(data);

});

*/
/*
di.putItem('test_entity',{
                    {'S': '0514de43-5dd0-4c24-aced-chitra'}
},
(error, data) => {
    if(error) console.log(error);
    if(data) console.log(data);
});
*/
