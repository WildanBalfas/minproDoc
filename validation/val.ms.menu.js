db.createCollection("m_menu", {
  validator: {
     $jsonSchema: {
        bsonType: "object",
        required: [ "code", "name", "controller"],
        properties: {
           code: {
              bsonType: "string",
              description: "must be a string and is required"
           },
           name: {
              bsonType: "string",
              description: "must be a string and is required"
           },
           controller: {
              bsonType: "string",
              description: "must be a string and is required"
           },
        }
     }
  }
})