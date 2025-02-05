import BaseModel from "./BaseModel.js";

/**
 * The alias is the recipient or sender of messages.
 *
 * One account can have multiple aliases, for example an account could
 * have a personal and work alias. The chat UI could allow the user
 * to send and receive messages from multiple aliases at once. Similar to
 * associating multiple email addresses with on gmail account, or having
 * multiple slack workspaces logged in.
 */
export default class Alias extends BaseModel {
	/**
	 * Alias model constructor.
	 *
	 * @param {string} id see [BaseModel's id property]{@link BaseModel#id}
	 * @param {Date} createdAt see [BaseModel's createdAt property]{@link BaseModel#createdAt}
	 * @param {Date} updatedAt see [BaseModel's updatedAt property]{@link BaseModel#updatedAt}
	 * @param {string} name see [Alias's name property]{@link Alias#name}
	 * @param {string} payload see [Alias's payload property]{@link Alias#payload}
	 */
	constructor(id, createdAt, updatedAt, name, payload) {
		super(id, createdAt, updatedAt);

		/**
		 * The name associated with the alias. This is used to display
		 * the alias in the UI.
		 *
		 * Unique across all aliases.
		 * @type {string}
		 */
		this.name = name;

		/**
		 * Public arbitrary metadata about an alias stored as a string.
		 *
		 * The payload is used so that users can store arbitrary metadata
		 * with objects used in the chat application. For example a user
		 * could publicly assign availability to their alias, or provide a public
		 * link to an avatar.
		 * @type {string}
		 */
		this.payload = payload;
	}
}