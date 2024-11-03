import Link from "next/link";

export default function HomePage(){
  return(
    <>
    <h1>This is the Homepage</h1>
    <ul>
      <li><Link href="/country">Country</Link></li>
    </ul>
    </>   
 )
}