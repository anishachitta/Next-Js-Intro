import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> {/*container for whole layout*/}
      <div className="w-full flex-none md:w-64"> {/* side navbar*/}
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>{/*children is from dash page.tsx*/}
    </div>
  );
}
