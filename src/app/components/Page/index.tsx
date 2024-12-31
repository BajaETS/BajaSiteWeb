import { TPage } from "./interface";

const Page = (props: TPage) => {

  const { children } = props

  return (
    <main className="mt-nav">
      {children}
    </main>
  )
}

export default Page
