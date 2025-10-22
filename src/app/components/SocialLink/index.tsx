import { TSocialLink } from "./interface"
import Image from "next/image";

const SocialLink = (props: TSocialLink) => {

  const { href, image, alt } = props

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image className="opacity-50" src={image} alt={alt} width={30} height={30}/>
    </a>
  )
}

export default SocialLink
