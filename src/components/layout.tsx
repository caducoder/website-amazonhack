import { useAuth } from "@/context/AuthContext";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode; }) {
  const { user } = useAuth();
  return (
    <>
      {user !== null && (
        <Box sx={{ display: 'flex', justifyContent: "end", padding: "0 16px" }}>
          <p>Empresa: {user.displayName}</p>
        </Box>
      )}
      <main>{children}</main>
    </>
  );
}