import dynamic from 'next/dynamic'

const TechIcon = dynamic(() => import('@/app/components/models/about-models/TechIcon'), {
  ssr: false,
})

type Props = {
    model: {
        url: string
        xlSize: number
        mdSize: number
    };
}

export default function TechIconWrap(props: Props) {
  return (
    <div className="h-screen w-full">
      <TechIcon model={props.model} />
    </div>
  )
}