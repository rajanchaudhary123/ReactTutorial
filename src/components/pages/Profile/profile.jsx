import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [MyProfileState, setMyrofileState] = useState({});

  const { fullName, email, mobile, avatar } = MyProfileState;

  useEffect(() => {
    let isMounted = true;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const fetchedData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/api/me", config, {
          CancelToken: source.token,
        });
        if (isMounted) {
          setMyrofileState(res.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        if (axios.isCancel(error)) {
          console.log("Axios request is cancelled");
        } else {
          console.error(error);
        }
      }
    };

    fetchedData();
    return () =>{
        console.log("Cleaned");
        isMounted = false;
        source.cancel();
    }

  },[]);

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      <h2>User Profile</h2>
      <Container>
        <Row>
          <Col>
            <img
              src={`http://localhost:5000/gallery/${avatar}`}
              alt="ProfileImage"
            />
          </Col>
          <Col>
            <div>
              <h1>{fullName}</h1>
            </div>
            <div>
              <h2>{email}</h2>
            </div>
            <div>
              <h2>{mobile}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;