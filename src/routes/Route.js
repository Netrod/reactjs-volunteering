import React from "react";
import Layout from "../components/layout";
import { useUser } from "../context/UserContext";
import { Redirect } from "react-router-dom";

function Route({ isPublic, component: Component, ...props }) {
  const { user } = useUser();
  console.log(user);

  if (isPublic) {
    return <Component {...props} />;
  }

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}

export default Route;
