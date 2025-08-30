import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
      document.title = "404: This page could not be found.";
    }, []);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-[10rem] font-bold text-black dark:text-white mb-0">404</h1>
        <p className="text-2xl text-muted-foreground">This page doesn't exist bru.</p>
        <Button className="cursor-pointer" onClick={() => navigate("/")}>Go Back Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
