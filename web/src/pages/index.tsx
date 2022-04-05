import { getAccessToken, getSession, useUser } from '@auth0/nextjs-auth0'
import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
  const {user} = useUser()
  return (
    <>
      <h1>Hello World</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      
      <a href='/api/auth/login'>Login</a>
    </>
    
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({req, res}) => { 
  const session = getSession(req, res)
  if (!session) { 
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      }
    }
  } 

}
