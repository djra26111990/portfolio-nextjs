export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <span className="flex items-center justify-center">
        Daniel Rivas © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
