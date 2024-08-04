interface DashboardLayoutProps {
  children: React.ReactNode;
}

import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import OrgSidebar from "./_components/org-sidebar";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="h-full pl-[60px]">
        <div className="flex h-full gap-x-3">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
