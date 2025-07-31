import React, { useState } from "react";
 
function DemoForm() {

    const [listData, setListData] = useState({
        name: "",
        email: "",
        password: "",

    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListData (prevState => ({
            ...prevState,
            [name]: value
        }));
        setError("");
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = listData;
        if(!name || !email || !password) {
            setError ("Please Enter Your name, emial, password.");
            return;
        }


        console.log("Form Submitted:", listData);
        setError("");
    };

    return(
         <form onSubmit={handleSubmit} style={{ width: "400px", margin: "20px auto" }}>

            {error && (
                <div style={{ color: "red", marginBottom: "10px", fontWeight: "bold" }}>
                    {error}
                </div>
            )}
            <div>
                <label>Name:</label>
                <input type="text" name="name"
                value={listData.name}
                onChange={handleChange}
                required
                 />
            </div>

            <div style={{
                padding: "10px 16px",
            }}>
                <label>Email:</label>
                <input type="text" name="email"
                value={listData.email}
                onChange={handleChange}
                required
                 />
            </div>

            <div style={{
                padding: "10px 16px",
            }}>
                <label>Password:</label>
                <input type="password" name="password"
                value={listData.password}
                onChange={handleChange}
                required
                 />
            </div>

            <button type="submit">submit</button>
        </form>
    );

}

export default DemoForm;