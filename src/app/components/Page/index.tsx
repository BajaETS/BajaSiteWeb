import { TPage } from "./interface";

const Page = (props: TPage) => {

  const { children } = props

  return (
    <main className="mt-nav h-full">
      {children}
    </main>
  )
}

export default Page
