
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  roles?: string[];
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    roles: ["admin", "professional", "receptionist", "patient"],
  },
  {
    label: "Appointments",
    icon: Calendar,
    href: "/appointments",
    roles: ["admin", "professional", "receptionist", "patient"],
  },
  {
    label: "Patients",
    icon: Users,
    href: "/patients",
    roles: ["admin", "professional", "receptionist"],
  },
  {
    label: "Professionals",
    icon: Stethoscope,
    href: "/professionals",
    roles: ["admin", "receptionist"],
  },
  {
    label: "Medical Records",
    icon: FileText,
    href: "/medical-records",
    roles: ["admin", "professional", "patient"],
  },
  {
    label: "Administration",
    icon: ClipboardList,
    href: "/admin",
    roles: ["admin"],
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const [role] = useState<string>("admin"); // Default role for demonstration

  const filteredNavItems = navItems.filter(
    (item) => !item.roles || item.roles.includes(role)
  );

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-border transition-transform",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-foreground">HealthPoint</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="lg:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="py-4">
        <div className="px-3 mb-2">
          <p className="text-xs font-medium text-muted-foreground">Main Menu</p>
        </div>
        <nav className="grid gap-1 px-2">
          {filteredNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent/50"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
        <div className="flex items-center gap-3 rounded-md px-3 py-2 bg-primary/10">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
            {role.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-medium">{role.charAt(0).toUpperCase() + role.slice(1)} View</p>
            <p className="text-xs text-muted-foreground">Switch roles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
