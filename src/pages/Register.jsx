import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Card } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AlertContext } from "../components/Alert";
import { logIn } from "../state/auth/authSlice";

export default function Register() {
  const [firstName, setFirstName] = useState("greg");
  const [lastName, setLastName] = useState("da");
  const [email, setEmail] = useState("test@example.fr");
  const [password, setPassword] = useState("!Qwerty1234");
  const [password_confirmation, setPassword_confirmation] =
    useState("!Qwerty1234");
  const { setAlert } = useContext(AlertContext);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  function handleSubmit() {
    const data = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation,
      },
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        const data = res.json();
        console.log(data);

        if (res.ok) {
          console.log(data);
          Cookies.set("token", res.headers.get("Authorization"), {
            expires: 2,
            sameSite: "strict",
          });
          return data;
        } else {
          console.log(data)
          throw { error: new Error(''), status: data };
        }
      })
      .then((data) => {
        setAlert({ text: "Registered successfully", type: "success" });
        dispatch(logIn(data.data));
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        // setAlert({ text: err.message, type: "error" });
      });
  }

  return (
    <div className="absolute flex w-full h-full bg-gray-300">
      <div className="m-auto w-5/6 md:w-4/6">
        <Card className="p-6">
          <h1 className="text-center mb-5 font-bold text-3xl">Register</h1>
          <form className="grid gap-y-5">
            <input
              className="rounded-full border p-2 outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter your fist name"
            />
            <input
              className="rounded-full border p-2 outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter your last name"
            />
            <input
              className="rounded-full border p-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="rounded-full border p-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
            <input
              className="rounded-full border p-2 outline-none"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
              type="password"
              placeholder="Enter your password confirmation"
            />
            <div className="flex justify-center">
              <Button
                disabled={
                  email &&
                  password &&
                  password_confirmation &&
                  firstName &&
                  lastName
                    ? false
                    : true
                }
                onClick={() => handleSubmit()}
                variant="contained"
              >
                Register
              </Button>
            </div>
          </form>
          <small className="mt-5">
            Already have an account?{" "}
            <Link className="underline" to={"/login"}>
              Login
            </Link>
          </small>
        </Card>
      </div>
    </div>
  );
}
