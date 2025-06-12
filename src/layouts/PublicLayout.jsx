const PublicLayout = ({ children }) => {
  return (
    <div>
      <h1>Hello Sandip</h1>
      <main>{children}</main>
      <footer>
        <p>This is a public layout</p>
      </footer>
    </div>
  );
};

export default PublicLayout;
