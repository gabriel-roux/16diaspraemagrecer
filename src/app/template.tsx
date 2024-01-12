import { Headline } from '@/components/headline'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Headline />
      {children}
    </>
  )
}