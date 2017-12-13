export default `
    type Channel {
        id: Int!
        name: String!
        messages: [Message!]!
        users: [User!]!
    }

    type Mutation {
        createChannel(TeamId: Int!, name: String!, public: Boolean=false): Boolean!
    }
`;
