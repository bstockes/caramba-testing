export default function Layout({ children }) {
  return (
    <div className="container">
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        <a href="/" style={{ marginRight: '15px' }}>Home</a>
        <a href="/ask">Ask Carly</a>
      </nav>
      {children}
    </div>
  );
}