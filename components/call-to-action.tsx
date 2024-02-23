import { Button } from './ui/button'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className="flex gap-5 sm:flex-row flex-wrap">
          <Button variant={"colored"} className="" asChild style={{ border: "1px solid black" }}>
            <Link href="/items">
              Browse Menu
            </Link>
          </Button>
          <Button variant={"outline"} className="" asChild style={{ border: "1px solid black" }}>
            <Link href="/register">
              Join Us
            </Link>
          </Button>
        </div>
  )
}

export default CallToAction