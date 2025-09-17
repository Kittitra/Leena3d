import dynamic from 'next/dynamic'

const ShowCastExp = dynamic(() => import('@/app/components/models/showcast-models/ShowCastExp'), {
  ssr: false,
})

export default function ShowCastWrap() {
  return (
    <div className="h-screen w-full">
      <ShowCastExp />
    </div>
  )
}