import { prisma } from '@/lib/services'
import {getSession, withPageAuthRequired} from '@auth0/nextjs-auth0'

export const getServerSideProps = withPageAuthRequired({
   getServerSideProps:  async ({req, res}) => {

    const session = await getSession(req, res)
    const userId: string = session?.user?.sub?.split('|')[1]
    
    return {
      props: {
        user: session?.user
      }
    }
  }
})
export default function UserOrder({user}) {
    return (
        <>
          <p>{user?.nickname}</p>
        </>
    );
  }
  