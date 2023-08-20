
import Footer from "../elements/footer/Footer";
import AdminSidebar from "../elements/sidebar/AdminSidebar";

/**
 *
 * @param {{
 *  children: React.JSX,
 *  rootClassName: string | React.ClassAttributes<string>
 * }} param0
 * @returns
 */
function AdminLayout({ children, rootClassName }) {
  return (
    <>
      <div
        className={`max-md:hidden flex w-screen overflow-x-hidden max-h-screen overflow-hidden ${
          rootClassName ?? ""
        }`}
      >
        <AdminSidebar />
        {children}
      </div>

      <div className={`md:hidden`}>
        Sorry, Seems you are browsing the admin panel via mobile. Please switch
        to web browser to access the dashboard
      </div>
    </>
  );
}

AdminLayout.Content = function Content({ children, className, ...rest }) {
  return (
    <div
      className={`overflow-y-scroll max-h-[calc(100%-(var(--nav-height,7vh)*1))] bg-zinc-950 ${className}`}
      {...rest}
    >
      {children}
      <Footer year="2024" />
    </div>
  );
};

AdminLayout.ContentBox = function ContentBox({ children, className, ...rest }) {
  return (
    <div className={`mx-6 mt-8  ${className}`} {...rest}>
      {children}
    </div>
  );
};

AdminLayout.propTypes;
AdminLayout.Content.propTypes;
AdminLayout.ContentBox.propTypes;

export default AdminLayout;
