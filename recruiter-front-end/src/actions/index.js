import {
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_ID_FAIL,
  GET_USER_ID_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  CREATE_GROUP_FAIL,
  CREATE_GROUP_SUCCESS,
  EDIT_GROUP_FAIL,
  EDIT_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
  DELETE_GROUP_SUCCESS,
  GET_GROUP_FAIL,
  GET_GROUP_SUCCESS,
  GET_ALL_GROUPS_FAIL,
  GET_ALL_GROUPS_SUCCESS,
  ADD_CONTACT_TO_GROUP_FAIL,
  ADD_CONTACT_TO_GROUP_SUCCESS,
  REMOVE_CONTACT_FROM_GROUP_FAIL,
  REMOVE_CONTACT_FROM_GROUP_SUCCESS,
  EDIT_CONTACT_IN_GROUP_FAIL,
  EDIT_CONTACT_IN_GROUP_SUCCESS,
  GET_GROUPCONTACTS_BY_GROUP_FAIL,
  GET_GROUPCONTACTS_BY_GROUP_SUCCESS,
  GET_GROUPCONTACTS_SUCCESS,
  GET_GROUPCONTACTS_FAIL,
  GET_RULES_FAIL,
  GET_RULES_SUCCESS,
  GET_RULE_SUCCESS,
  GET_RULE_FAIL,
  ADD_RULE_SUCCESS,
  ADD_RULE_FAIL,
  UPDATE_RULE_SUCCESS,
  UPDATE_RULE_FAIL,
  DELETE_RULE_SUCCESS,
  DELETE_RULE_FAIL,
  GET_ENGINES_FAIL,
  GET_ENGINES_SUCCESS,
  GET_ENGINE_FAIL,
  GET_ENGINE_SUCCESS,
  ADD_ENGINE_FAIL,
  ADD_ENGINE_SUCCESS,
  UPDATE_ENGINE_FAIL,
  UPDATE_ENGINE_SUCCESS,
  DELETE_ENGINE_FAIL,
  DELETE_ENGINE_SUCCESS,
  ADD_EMAIL_HISTORY_SUCCESS,
  ADD_EMAIL_HISTORY_FAIL,
  GET_EMAIL_HISTORY_SUCCESS,
  GET_EMAIL_HISTORY_FAIL,
  GET_EMAIL_TOTAL_SUCCESS,
  GET_EMAIL_TOTAL_FAIL,
  GET_EMAILS_BY_CANDIDATE_FAIL,
  GET_EMAILS_BY_CANDIDATE_SUCCESS,
  GET_EMAILS_BY_CONTACT_FAIL,
  GET_EMAILS_BY_CONTACT_SUCCESS,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
} from './types';

import { getUsers, addUserToSQL, getUserIdfromUUID } from './userActions';
import {
  getContact,
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactActions';
import {
  createGroup,
  editGroup,
  deleteGroup,
  getGroup,
  getGroups,
} from './groupActions';
import {
  addContactToGroup,
  editContactInGroup,
  removeContactfromGroup,
  getGroupContacts,
  getGroupContactsByGroupId,
} from './groupContactsActions';
import {
  getEngine,
  getEngines,
  addEngine,
  updateEngine,
  deleteEngine,
} from './engineActions';
import {
  getRule,
  getRules,
  addRule,
  updateRule,
  deleteRule,
} from './ruleActions';
import {
  getEmailHistory,
  getEmailHistoryAboutCandidate,
  getEmailHistoryToContact,
  getEmailTotal,
  addEmailHistory,
} from './emailActions';

// import { history } from "../helpers/history";

export {
  // USERS
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_ID_FAIL,
  GET_USER_ID_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  getUsers,
  addUserToSQL,
  getUserIdfromUUID,
  // CONTACTS
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  getContact,
  getContacts,
  addContact,
  deleteContact,
  updateContact,
  // GROUPS
  CREATE_GROUP_FAIL,
  CREATE_GROUP_SUCCESS,
  EDIT_GROUP_FAIL,
  EDIT_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
  DELETE_GROUP_SUCCESS,
  GET_GROUP_FAIL,
  GET_GROUP_SUCCESS,
  GET_ALL_GROUPS_FAIL,
  GET_ALL_GROUPS_SUCCESS,
  createGroup,
  editGroup,
  deleteGroup,
  getGroup,
  getGroups,
  // GROUP CONTACTS
  ADD_CONTACT_TO_GROUP_FAIL,
  ADD_CONTACT_TO_GROUP_SUCCESS,
  REMOVE_CONTACT_FROM_GROUP_FAIL,
  REMOVE_CONTACT_FROM_GROUP_SUCCESS,
  EDIT_CONTACT_IN_GROUP_FAIL,
  EDIT_CONTACT_IN_GROUP_SUCCESS,
  GET_GROUPCONTACTS_BY_GROUP_SUCCESS,
  GET_GROUPCONTACTS_BY_GROUP_FAIL,
  GET_GROUPCONTACTS_SUCCESS,
  GET_GROUPCONTACTS_FAIL,
  addContactToGroup,
  editContactInGroup,
  removeContactfromGroup,
  getGroupContacts,
  getGroupContactsByGroupId,
  // RULES
  GET_RULES_FAIL,
  GET_RULES_SUCCESS,
  GET_RULE_SUCCESS,
  GET_RULE_FAIL,
  ADD_RULE_SUCCESS,
  ADD_RULE_FAIL,
  UPDATE_RULE_SUCCESS,
  UPDATE_RULE_FAIL,
  DELETE_RULE_SUCCESS,
  DELETE_RULE_FAIL,
  getRule,
  getRules,
  addRule,
  updateRule,
  deleteRule,
  // ENGINES
  GET_ENGINES_FAIL,
  GET_ENGINES_SUCCESS,
  GET_ENGINE_FAIL,
  GET_ENGINE_SUCCESS,
  ADD_ENGINE_FAIL,
  ADD_ENGINE_SUCCESS,
  UPDATE_ENGINE_FAIL,
  UPDATE_ENGINE_SUCCESS,
  DELETE_ENGINE_FAIL,
  DELETE_ENGINE_SUCCESS,
  getEngine,
  getEngines,
  addEngine,
  updateEngine,
  deleteEngine,
  // EMAILS
  ADD_EMAIL_HISTORY_SUCCESS,
  ADD_EMAIL_HISTORY_FAIL,
  GET_EMAIL_HISTORY_SUCCESS,
  GET_EMAIL_HISTORY_FAIL,
  GET_EMAIL_TOTAL_SUCCESS,
  GET_EMAIL_TOTAL_FAIL,
  GET_EMAILS_BY_CANDIDATE_FAIL,
  GET_EMAILS_BY_CANDIDATE_SUCCESS,
  GET_EMAILS_BY_CONTACT_FAIL,
  GET_EMAILS_BY_CONTACT_SUCCESS,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
  getEmailHistory,
  getEmailHistoryAboutCandidate,
  getEmailHistoryToContact,
  getEmailTotal,
  addEmailHistory,
};
