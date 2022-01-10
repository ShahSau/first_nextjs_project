import React from "react";

function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export default UserProfilePage;

export async function getServerSideProps(contex) {
  //using contex we get the access to the full request and response object
    const {params, req, res} = contex
  return {
    props: {
      username: "max",
    },
  };
}
