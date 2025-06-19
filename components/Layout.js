import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}