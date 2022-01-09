import { useRouter } from "next/router";
import React from "react";

function ClientProjectidPage() {
  const { query } = useRouter();
  return (
    <div>
      <h1>
        ClientProjectidPage for a selected client on specific project{" "}
        {query.ClientProjectid}
      </h1>
    </div>
  );
}

export default ClientProjectidPage;
