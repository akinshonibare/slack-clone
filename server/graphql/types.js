import { gql } from 'apollo-server-express';

export default gql`

  # user type schema
  type User {
    id: Int!
    username: String!
    email: String!
    teams: [Team!]!
  }

  # team type schema
  type Team {
    id: Int!
    name: String!
    owner: Int!
    members: [User!]!
    channels: [Channel!]!
  }

  # channel type schema
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
  }

  # message type schema
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
    createdAt: String!
  }

  # subscription 
  type Subscription {
    newChannelMessage(channelId: Int!): Message!
  }

  # query
  type Query {
    # user
    user(id: Int!): User!
    allUsers: [User!]!

    # team
    myTeams: [Team!]!
    invitedToTeams: [Team!]!

    # message
    messages(channelId: Int!): [Message!]!
  }

  # mutation
  type Mutation {
    # user
    register(username: String!, email: String!, password: String!): RegisterResponse!
    login(email: String!, password: String!): LoginResponse!

    # team
    createTeam(name: String!): CreateTeamResponse!
    addTeamMember(email: String!, teamId: Int!): VoidResponse!

    # channel
    createChannel(teamId: Int!, name: String!, public: Boolean=false): ChannelResponse!

    # message
    createMessage(channelId: Int!, text: String!): Boolean!

  }

  # error
  type Error {
    path: String!
    message: String
  }

  # register response
  type RegisterResponse {
    ok: Boolean!
    user: User
    errors: [Error!]
  }

  # login response
  type LoginResponse {
    ok: Boolean!
    token: String
    refreshToken: String
    errors: [Error!]
  }

  # team response
  type CreateTeamResponse {
    ok: Boolean!
    team: Team
    errors: [Error!]
  }

  # channel response
  type ChannelResponse {
    ok: Boolean!
    channel: Channel
    errors: [Error!]
  }

  # void response
  type VoidResponse {
    ok: Boolean!
    errors: [Error!]
  }
`;
