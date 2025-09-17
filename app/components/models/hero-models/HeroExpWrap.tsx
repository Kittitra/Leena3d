import dynamic from 'next/dynamic'

const HeroExp = dynamic(() => import('@/app/components/models/hero-models/HeroExp'), {
  ssr: false,
})

export default function HeroExpWrap() {
  return (
    <div className="h-screen w-full">
      <HeroExp />
    </div>
  )
}