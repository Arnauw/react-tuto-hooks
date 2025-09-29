export const TableUsers = ({users}) => {
    return (
        <>
            <table className="w-[90%] mx-auto mt-4" id="table">
                <thead>
                <tr>
                    <th className="text-center bg-lightcoral text-white border border-white p-3">Name</th>
                    <th className="text-center bg-lightcoral text-white border border-white p-3">Username</th>
                    <th className="text-center bg-lightcoral text-white border border-white p-3">Email</th>
                    <th className="text-center bg-lightcoral text-white border border-white p-3">Address</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(({id, name, username, email, address}) => {
                        return (
                            <tr className={"text-center"} key={id}>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{address.city} {address.suite} {address.city} {address.zipcode}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td className="text-center border border-white">Row 1, Cell 1</td>
                    <td className="text-center border border-white">Row 1, Cell 2</td>
                    <td className="text-center border border-white">Row 1, Cell 3</td>
                    <td className="text-center border border-white">Row 1, Cell 3</td>
                </tr>
                </tbody>
            </table>

        </>
    )
}
