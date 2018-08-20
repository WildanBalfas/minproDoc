db.runCommand({
    collMod: "m_user",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["username", "password", "m_role_id", "m_employee_id"],
            properties: {
                username: {
                    bsonType: "string",
                    pattern: "/^([0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]+.{5,}$/",
                    description: "must be a string and is required"
                },
                password: {
                    bsonType: "string",
                    pattern: "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/",
                    description: "must be a string and is required"
                },
                m_role_id: {
                    bsonType: "object",
                    description: "must be a string and is required"
                },
                m_role_id: {
                    bsonType: "object",
                    description: "must be a string and is required"
                }
            }
        }
    }
})