import { Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <div>Hello From Welcome</div>
      <Route to="/welcome/new-user" element={<p>Welcome new User!</p>}></Route>
    </section>
  );
};

export default Welcome;
