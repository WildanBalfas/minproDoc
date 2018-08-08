db.runCommand({
    collMod: "m_employee",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["first_name", "last_name", "m_role_id", "m_employee_id"],
            properties: {
                first_name: {
                    bsonType: "string",
                    pattern: "/^[A-Za-z]{3,50}*$/",
                    description: "must be a string and is required"
                },
                last_name: {
                    bsonType: "string",
                    pattern: "/^[A-Za-z]{3,50}*$/",
                    description: "must be a string and is required"
                }
            }
        }
    }
})