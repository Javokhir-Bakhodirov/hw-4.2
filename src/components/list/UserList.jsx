import axios from "axios";
import { useState, useEffect } from "react";

const UserList = () => {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		axios("https://jsonplaceholder.typicode.com/users/").then((response) =>
			setUserData(response.data)
		);
	}, []);
	console.log(userData);
	return (
		<>
			{userData.map((user) => {
				return (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>
							{user.address.street}, {user.address.suite}, {user.address.city},
							{user.address.zipcode}
						</td>
						<td>{user.phone}</td>
						<td>{user.website}</td>
						<td>
							{user.company.name}, {user.company.catchPhrase}, {user.company.bs}
						</td>
					</tr>
				);
			})}
		</>
	);
};

export default UserList;
