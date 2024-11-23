import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false, loading: () => <p>Loading...</p> })

export default Chart
