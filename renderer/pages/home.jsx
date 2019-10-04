import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family:"Beaufort for LOL";
  src:url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.eot?#iefix");
  src:url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.eot?#iefix") format("eot"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.woff") format("woff"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.ttf") format("truetype"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.svg#") format("svg");
  font-weight: 1 699;
}
@font-face {
  font-family:"Beaufort for LOL";
  src:url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.eot?#iefix");
  src:url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.eot?#iefix") format("eot"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.woff") format("woff"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.ttf") format("truetype"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Bold.svg#") format("svg");
  font-weight: 700 999;
}
@font-face {
  font-family:"Spiegel";
  src:url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.eot?#iefix");
  src:url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.eot?#iefix") format("eot"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.woff") format("woff"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.ttf") format("truetype"),url("https://lolstatic-a.akamaihd.net/awesomefonts/1.0.0/Fonts/Spiegel-Regular.svg#") format("svg");
}

body {
  background-color: #111;
  font-family: Beaufort for LOL,serif;
}
`;

const Title = styled.h1`
  font-size: 50px;
  color: #fff;
  text-align: center;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: -9999px;
  right: -9999px;
  bottom: -9999px;
  left: -9999px;
  margin: auto;
  min-width: 100%;
  min-height: 100%;
  filter: blur(4px);
  opacity: .2;
`;

const BackgroundComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Button = styled.button`
  display: block;
  font-family: Beaufort for LOL,serif;
  min-width: 280px;
  padding: 24px 20px;
  margin: 54px 0;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(180deg,#0596aa 0,#005a82);

  font-family: Beaufort for LOL,serif;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: #cdfafa;

  cursor: pointer;
  line-height: 1;
  border: none;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 25px rgba(0,0,0,.11);
  transition: color .2s;
  min-width: 240px;
  max-width: 100%;

  &:after {
    content: "";
    display: block;
    background: url(https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_GB/004b1dd2a516e1436a86d42ed703aa621803918c/assets/en_GB/assets/button-bg-pattern.png) repeat-x 0 0;
    background-size: auto 100%;
    background-position: 0 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .3;
    animation: button-background 60s linear infinite;
    animation-play-state: paused;
    will-change: background-position;
    transition: .4s ease
  }

  &:hover:after {
    opacity: .5;
    animation-play-state: running
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    background: #111;
    z-index: -1
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px
  }

  @-webkit-keyframes button-background {
    0% {
        background-position: 0 0
    }
    to {
        background-position: 100% 0
    }
  }

  @keyframes button-background {
    0% {
        background-position: 0 0
    }
    to {
        background-position: 100% 0
    }
  }
`;

const Divider = styled.div`
  display: block;

  & > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SceneContent = styled.div`
  position: relative;
  padding-top: 115px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 1;
    bottom: calc(100% + -125px);
    width: 18px;
    height: 135px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    background-image: url(https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_GB/004b1dd2a516e1436a86d42ed703aa621803918c/assets/en_GB/assets/hangtag.svg)
  }
`;

const Home = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>
        <title>Home - Nextron (with-javascript)</title>
      </Head>
      <div>
        <SceneContent>
          <BackgroundComponent>
            <BackgroundVideo playsInline={true} autoPlay={true} muted loop={true}>
                <source src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_GB/004b1dd2a516e1436a86d42ed703aa621803918c/assets/en_GB/assets/summoners-rift.mp4" type="video/mp4" />
            </BackgroundVideo>
          </BackgroundComponent>
          <Title>PLAY LEAGUE SANDBOX NOW</Title>
          <Divider>
            <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup/en_GB/004b1dd2a516e1436a86d42ed703aa621803918c/assets/en_GB/assets/divider-download.png" alt="divide" />
          </Divider>
          <Button>DOWNLOAD</Button>
        </SceneContent>
      </div>
    </React.Fragment>
  );
};

export default Home;
