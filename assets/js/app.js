"use strict";

// imports
import { initViews } from "./spa-router.js";
import { apiReadMembers, members } from "./api.js";
import { showMembers } from "./show-members.js";
import { checkIfLoggedIn } from "./system-access.js";
import { createMemberForm } from "./create-member.js";
import { searchbarAndFilter } from "./search.js";

// onload event
window.addEventListener("load", initApp);

// initApp function
async function initApp() {
	console.log(`App is running!`);
	initViews(); // init spa router
	checkIfLoggedIn(); // check if user is logged in
	await apiReadMembers();
	showMembers(members);

	// add event listeners
	document.querySelector("#add-new-member-btn").addEventListener("click", createMemberForm);
	document.querySelector("#filter").addEventListener("change", searchbarAndFilter);

	document.querySelector("#search").addEventListener("keyup", searchbarAndFilter);
}

