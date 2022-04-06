import Endpoint from "./Endpoint.js";
import Account from "../models/Account.js";

/**
 * Helper class for authentication routes.
 */
export default class AuthEndpoint extends Endpoint {
	/**
	 * AuthEndpoint constructor.
	 * @param {Client} client see [Endpoint's client property]{@link Endpoint#client}
	 */
	 constructor(client) {
		super(client);
	}

	/**
	 * Sign up for a new account with a single initial alias.
	 * @param {string} alias The name of the initial alias if signup is successful.
	 * @param {string} email The email address associated with the account.
	 * @param {string} password The password associated with the account.
	 * @returns {Promise<any>} A success message upon successful login
	 */
	async signup(alias, email, password) {
		return this.request("signup", {
			method: "POST",
			body: { alias, email, password },
		});
	}

	/**
	 * Login to an existing account.
	 * @param {string} email The email address associated with the account.
	 * @param {string} password The password associated with the account.
	 * @returns {Promise<Account>} Upon success returns the account which was logged in.
	 */
	async login(email, password) {
		let json = await this.request("login", {
			method: "POST",
			body: { email, password },
		});

		return new Account(json.account);
	}

	/**
	 * Logout of the currently logged in account
	 * @returns {Promise<void>} Upon success returns nothing.
	 */
	async logout() {
		return this.request("logout", {
			responseType: "text",
			method: "POST"
		});
	}

	/**
	 * Check if the client is currently logged in
	 * @returns {Promise<{isLoggedIn: boolean, account: Account | undefined}>} an
	 * object with two keys isLoggedIn and account. If isLoggedIn is true then
	 * account contains has the currently logged in account. If isLoggedIn is
	 * false then account is undefined.
	 */
	async isLoggedIn() {
		let json = await this.request("isloggedin");

		return {
			isLoggedIn: json.response,
			account: json.data ? new Account(json.data) : undefined
		};
	}
}