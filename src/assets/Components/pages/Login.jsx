import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload on submit

        // Simple validation
        if (!email || !password) {
            alert("Both fields are required!");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }
         
        navigate("/Home");
    };

    return (
        <div>
            <div className="w-full h-screen bg-gradient-to-b from-[#AFDCB1]  to-[#82C4DA] flex justify-center items-center">
                <div className="w-[550px] h-[400px] bg-white shadow-xl rounded-lg p-3">
                    <div className="w-full h-full   ">
                        <div className="w-full h-24  mb-1 flex justify-center items-end">
                            <div className="w-1/2 h-20  flex justify-center items-end">
                                <div className="w-3/6 h-16 flex justify-end items-end mb-1">
                                    <img src="\Vector.png" alt="" />
                                </div>
                                <div className="w-3/6 h-16  flex items-end ">
                                    <h1 className='font-squada text-[24px] bold-[400] '> Speedo</h1>
                                </div>
                            </div>

                        </div>
                        <div className="w-full h-60 flex justify-center items-center mt-4">
                            <div className="w-9/12 h-full grid grid-rows-3 gap-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full h-20">
                                        <div className="w-1/2 h-7 mb-2">
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="w-full h-12">
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full h-full rounded-md border-2 p-2 bg-[#F7FBFF]"
                                                placeholder="you@example.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} // Updates the email state
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-20">
                                        <div className="w-1/2 h-7 mb-2">
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="w-full h-12">
                                            <input
                                                type="password"
                                                id="password"
                                                className="w-full h-full rounded-md border-2 p-2 bg-[#F7FBFF]"
                                                placeholder="At least 8 characters"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} // Updates the password state
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-16 flex justify-center items-center">
                                        <button
                                            type="submit"
                                            className="w-full h-10 bg-black rounded-md text-white font-semibold text-xl"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login