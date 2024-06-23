import UserList from "../list/UserList.jsx";
import "../table/UserTable.scss";

const UserTable = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Address</th>
					<th>Phone</th>
					<th>Website</th>
					<th>Company</th>
				</tr>
			</thead>
			<tbody>
				<UserList />
			</tbody>
		</table>
	);
};

export default UserTable;
