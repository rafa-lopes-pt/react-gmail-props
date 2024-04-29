import React from "react";
import Email from "./Email";

export default function EmailList({ list, updateList }) {
	const toggleStar = (targetEmail) => {
		const updatedEmails = (emails) =>
			emails.map((email) =>
				email.id === targetEmail.id
					? { ...email, starred: !email.starred }
					: email
			);
		updateList(updatedEmails);
	};

	const toggleRead = (targetEmail) => {
		const updatedEmails = (emails) =>
			emails.map((email) =>
				email.id === targetEmail.id
					? { ...email, read: !email.read }
					: email
			);
		updateList(updatedEmails);
	};
	return (
		<main className="emails">
			<ul>
				{list.map((email, index) => (
					<Email
						email={email}
						toggleRead={toggleRead}
						toggleStar={toggleStar}
						key={"email-li-" + index}
					/>
				))}
			</ul>
		</main>
	);
}
