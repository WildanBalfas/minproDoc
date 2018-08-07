db.createCollection("m_unit", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "code", "name" ],
          properties: {
             code: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             name: {
                bsonType: "string",
                description: "must be a string and is not required"
             }
          
          }
       }
    }
 })