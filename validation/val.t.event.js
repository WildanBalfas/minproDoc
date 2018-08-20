db.createCollection("t_event", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "code", "event_name", "event_place", "start_date", "end_date", "budget"],
          properties: {
             code: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             event_name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             event_place: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             start_date: {
                 bsonType: "date",
                 description: "is required"
             },
             end_date: {
                bsonType: "date",
                description: "is required"
            },
            budget: {
                bsonType: "number",
                description: "is required"
            }
          }
       }
    }
 });