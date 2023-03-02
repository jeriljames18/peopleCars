

const FormCar = () => {
    return (
        <div>
            <h2>Add Car</h2>
            <form >
                <label>
                    Year:
                    <input
                        required
                        type="number"
                        min="1800"
                        max="2023"
                        name="year"
                        // // onChange={handleChange}
                        placeholder="Year"
                    />
                </label>

                <label>
                    Make:
                    <input
                        type="text"
                        required
                        // onChange={handleChange}
                        name="make"
                        placeholder="Make"
                    />
                </label>

                <label>
                    Model:
                    <input
                        type="text"
                        required
                        // onChange={handleChange}
                        name="model"
                        placeholder="Model"
                    />
                </label>

                <label>
                    Price:
                    <input
                        type="number"
                        required
                        // onChange={handleChange}
                        name="price"
                        placeholder="$"
                    />
                </label>

                <label>
                    Person
                    {/* <select // onChange={handleChange} name="personId">
            {optionss.data.persons.map((e, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select> */}
                </label>
                <button type="submit">Add Car</button>
            </form>
        </div>
    )


}


export default FormCar;
