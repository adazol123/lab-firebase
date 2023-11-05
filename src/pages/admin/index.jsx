import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/elements/header/AdminHeader";

function AdminPage() {
  return (
    <AdminLayout>
      <div className="w-full [--nav-height:56px]">
        <AdminHeader />
        <Outlet />
      </div>
    </AdminLayout>
  );
}

export default AdminPage;
