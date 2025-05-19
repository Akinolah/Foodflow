
export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} FoodFlow. All rights reserved.</p>
        <p className="mt-1">Delivering Freshness to Your Doorstep.</p>
      </div>
    </footer>
  );
}
