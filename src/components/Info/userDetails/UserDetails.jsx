const UserDetails = (props) => {
    return (
      <>
            <div>
                <h3>Your login details:</h3>
          <span>
            <b>Email: </b>
          </span>
          <span>{sessionStorage.getItem("username")}</span>
        </div>
        <div>
          <span>
            <b>Password: </b>
          </span>
          <span>{sessionStorage.getItem("password")}</span>
            </div>
            <div>
                <button onClick={() => { sessionStorage.clear();  window.location.assign("/");  }}>Logout</button>
            </div>
      </>
    );
}

export default UserDetails;