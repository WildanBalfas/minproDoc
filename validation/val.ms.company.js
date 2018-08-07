db.createCollection("m_company", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "code", "name"],
          properties: {
             code: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             phone: {
                bsonType: "string",
                pattern: "^[0-9-()]*$",
                description: "only number or character (,),-"
             },
             email: {
                bsonType: "string",
                pattern: "^[0-9-()]*$"
             }
          }
       }
    }
 });