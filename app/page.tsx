
import React from 'react';
import { CatchAll, generateMetadata } from "@retailhub/audacity"

export { generateMetadata }

interface Props {
  params: any
  searchParams: any
}


const Page: React.FC<Props> = (props) => {  
    return <CatchAll {...props} />
}

export default Page;