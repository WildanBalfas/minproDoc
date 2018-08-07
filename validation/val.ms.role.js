db.createCollection("m_role", {
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
        }
     }
  }
})