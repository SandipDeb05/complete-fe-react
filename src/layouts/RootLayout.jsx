import "bootstrap/dist/css/bootstrap.min.css";

const RootLayout = ({ children }) => {
  return (
    <div>
      <h1>Hello Sandip</h1>
      <main>{children}</main>
      <footer>
        <p>This is a root layout</p>
      </footer>
    </div>
  );
};

export default RootLayout;
