import dynamic from "next/dynamic";

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p>Loading ...</p>
})

export default Map