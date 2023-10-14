import dynamic from "next/dynamic";

const IntMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

export default IntMap