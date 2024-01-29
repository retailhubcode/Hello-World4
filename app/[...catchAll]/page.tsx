import React from "react";
import { CatchAll, generateMetadata } from "@retailhub/audacity"

export { generateMetadata }

const Page: React.FC<any> = (props) => {
  return <CatchAll {...props} />;
};

export default Page;
