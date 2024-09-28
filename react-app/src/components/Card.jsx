export function Card({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={html_url} target="_blank">
          {name || login}
        </a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
            <p>Public repos: {public_repos}</p>
        </div>
        <div>
        <p>Followers: {followers}</p>
        </div>
        <div>
        <p>Following: {following}</p>
        </div>
      </div>
    </div>
  );
}
