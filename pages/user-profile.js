/*
 * Uses server-side rendering (SSR) to fetch individual user data.
 * Normal rendering will display the same data for every user.
 * NOT pre-generated.
 */

function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  // console.log('Server side code');

  return {
    props: {
      username: 'Matt',
    },
  };
}
