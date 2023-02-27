
const changeHandle = (e) => {
    const personName = e.target.name;
    const personValue = e.target.value;
    
    
}
const FormPeople = () => {
    return (
        <div>
            <h2>Add Person</h2>
            <form >
                <label>
                    First Name
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        onChange={changeHandle}
                    />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                    />
                </label>
                <button type="submit">Add Person</button>
            </form>
        </div>
    )

}

export default FormPeople;