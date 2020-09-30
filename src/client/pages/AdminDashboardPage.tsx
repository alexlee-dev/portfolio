import * as React from "react";

import CreatePortfolioItem from "../forms/CreatePortfolioItem";

import { UserDocument } from "../types";

export interface AdminDashboardPageProps {
  user: UserDocument;
}

const AdminDashboardPage: React.FunctionComponent<AdminDashboardPageProps> = (
  props: AdminDashboardPageProps
) => {
  const { user } = props;

  return (
    <div>
      <h1>Admin Dashboard Page</h1>
      <p>USER IS AUTHENTICATED!</p>
      {JSON.stringify(user, null, 2)}

      <CreatePortfolioItem />
    </div>
  );
};

export default AdminDashboardPage;
