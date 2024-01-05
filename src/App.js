import { useState } from "react";
import "./App.css";

const imgRegex = /\.(?:png|jpg|jpeg|gif|bmp|svg)$/i;
function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
function App() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      email,
      userName,
      firstName,
      lastName,
      image,
      password,
    });
    setEmail("");
    setUserName("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setImage("");
    setShowPassword(false);
  };

  const handleFormValidation = () => {
    if (
      email.includes("@") &&
      email.split("@")[1].split(".")[1].length >= 2 &&
      email.split("@")[1].split(".")[1].length <= 3 &&
      userName.trim().length >= 3 &&
      firstName.trim().length >= 3 &&
      lastName.trim().length >= 3 &&
      image.startsWith("http") &&
      // isValidURL(image) &&
      // imgRegex.test(image) &&
      password.length >= 8
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  const handleStopValidation = () => {
    console.log("sdasd");
    setTimeout(() => {
      setIsValid(false);
    }, 200);
  };

  return (
    <div className="m-5">
      <form
        className="d-flex flex-column mx-auto col-12 col-sm-8 col-md-6"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter User name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="url"
            className="form-control"
            id="image"
            placeholder="Enter Image url"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
          />
        </div>
        <div className="input-group ">
          <label htmlFor="exampleInputPassword1" className="d-block w-100">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control input-group"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <span
            className="input-group-text bg-dark text-white "
            role="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            Show/Hidden
          </span>
        </div>
        <div
          className="d-flex mx-auto"
          role="button"
          onMouseLeave={handleStopValidation}
        >
          <button
            type="submit"
            disabled={isValid}
            onMouseOver={handleFormValidation}
            className={`btn btn-primary mt-3 ${isValid ? "animate" : ""}`}
          >
            Submit
          </button>
        </div>
      </form>
      {user.userName && (
        <div
          className="card text-center mx-auto mt-3"
          style={{ width: "18rem" }}
        >
          <img src={user.image} className="card-img-top" alt="..." />
          <div className="card-footer text-body-secondary"></div>
          <div className="card-body">
            <h5 className="card-title">{user.userName}</h5>
            <p className="card-text">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div className="card-footer text-body-secondary">{user.email}</div>
        </div>
      )}
    </div>
  );
}

export default App;
