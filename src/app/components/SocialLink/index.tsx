import { TSocialLink } from "./interface"

const SocialLink = (props: TSocialLink) => {

  const { href, image, alt } = props

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className="w-7 opacity-50 h-auto" src={image} alt={alt} />
    </a>
  )
}

export default SocialLink
