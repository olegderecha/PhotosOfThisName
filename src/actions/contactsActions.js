// Action Types
const GET_CONTACTS = 'GET_CONTACTS'
const CONTACTS_RECEIVED = 'CONTACTS_RECEIVED'

// Action Creators
const getContacts = () => ({
  type: GET_CONTACTS,
})

const contactsReceived = (payload) => ({
  type: CONTACTS_RECEIVED,
  payload,
})

export default {
  GET_CONTACTS,
  CONTACTS_RECEIVED,
  getContacts,
  contactsReceived,
}
