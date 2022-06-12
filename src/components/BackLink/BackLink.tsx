import Link from "next/link"
import { TextLink } from "../TextLink/TextLink"

export const BackLink: React.FC = () => {
  return <Link href='/' passHref>
    <TextLink variant='primary'>← Home</TextLink>
  </Link>
}