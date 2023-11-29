import { Card, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AlertContext } from "../components/Alert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../state/auth/authSlice";

export default function Login() {
  const [email, setEmail] = useState("test@example.fr");
  const [password, setPassword] = useState("qwerty1234");
  const { setAlert } = useContext(AlertContext);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  function handleSubmit() {
    const data = {
      user: {
        email,
        password
      },
    };
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        const data = res.json();
        console.log(res);
        console.log(data);
        if (res.ok) {
          Cookies.set("token", res.headers.get("Authorization"), {
            expires: 2,
            sameSite: "strict",
          });
          return data;
        } else {
          throw { error: new Error("Something went wrong"), data: data };
        }
      })
      .then((data) => {
        console.log(data);

        setAlert({ text: "Registered successfully", type: "success" });
        dispatch(logIn(data.data));
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        console.error(err.error);
        console.error(err.data);
        setAlert({ text: err.error.message, type: "error" });
      });
  }

  return (
    <div className="absolute flex w-full h-full bg-gray-300">
      <div className="m-auto w-5/6 md:w-4/6">
        <Card className="p-6">
          <h1 className="text-center mb-5 font-bold text-3xl">Login</h1>
          <form className="grid gap-y-5">
            <input
              className="rounded-full border p-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
            />
            <input
              className="rounded-full border p-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex justify-center">
              <Button disabled={
                  email && password ? false : true
                } onClick={() => handleSubmit()} variant="contained">
                Login
              </Button>
            </div>
          </form>
          <small className="mt-5">
            Need an account?{" "}
            <Link className="underline" to={"/register"}>
              Register
            </Link>
          </small>
        </Card>
      </div>
    </div>
  );
}
