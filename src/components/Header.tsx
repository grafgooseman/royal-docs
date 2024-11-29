import { Button } from "@/components/ui/button";
import { SunIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors cursor-pointer">
          Royal Docs
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Toggle theme">
            <SunIcon className="h-5 w-5" />
          </Button>

          <Button>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
