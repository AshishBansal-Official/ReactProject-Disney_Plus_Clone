import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
    selectUserEmail,
    selectUserName,
    selectUserPhoto,
    setSignOutState,
    setUserLoginDetails,
} from "../features/user/userSlice";
import { auth, provider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    const navigate = useNavigate();

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                navigate("/home", { replace: true });
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        } else if (userName) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    navigate("/", { replace: true });
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    };

    return (
        <Container>
            <Content>
                <BgImage />
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp onClick={() => handleAuth()}>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an
                        additional fee with a Disney+ subscription. As of
                        03/26/21, the price of Disney+ and The Disney Bundle
                        will increase by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    /* background-color: red; */
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2px;
    width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.div`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
        cursor: pointer;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`;

export default Login;
