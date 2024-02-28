import { useUser } from "@auth0/nextjs-auth0/client";
export default function Home(props) {
  const {user} = useUser()
  return (
      <>
        <a href="/api/auth/login">{user?.name ? `${user.name} (${user.sub?.split('|')[1]})` : 'Not Logged In' }</a>
        <a href="/api/auth/logout">{user ? 'Sign Out' : ''}</a>
      </>
  );
}
