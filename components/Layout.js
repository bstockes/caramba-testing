export default function Layout({ children }) {
  return (
    <div className="container">
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        <a href="/" style={{ marginRight: '15px' }}>Home</a>
        <a href="/ask" style={{ marginRight: '15px' }}>Ask Carly</a>
        <a href="/mygarage" style={{ marginRight: '15px' }}>My Garage</a>
        <a href="/account">Account</a>
      </nav>
      {children}
    </div>
  );
}