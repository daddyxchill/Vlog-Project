const Home: React.FC<{ message: string }> = ({ message }) => (
  <>
    <h2>FEDDIE SANDOVAL</h2>
    <img src="/me.jpg" alt="Suwail's profile" className="profile-pic" />
    <p>{message || 'Loading...'}</p>
  </>
);

export default Home;