"use client";
import { rootStore } from "@/app/store/rootStore";
import { Box } from "@mui/material";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={rootStore}>
      <Box>{children}</Box>
    </Provider>
  );
}
