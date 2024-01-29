import { Layout, layoutRevalidate } from "@retailhub/audacity";

export const revalidate = layoutRevalidate

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
