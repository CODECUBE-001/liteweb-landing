import { motion } from "framer-motion";
import {
LocomotiveScrollProvider,
} from "react-locomotive-scroll";
import { Fragment, useRef } from "react";
import scrollOptions from "../Config/scroll";
import { Helmet } from "react-helmet";
import {Header, Footer, Body} from "../Layout";
import { Chatbot } from "../Components";

const Home = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>
      <Helmet>
        <title>Lite web - Home</title>
      </Helmet>
      <Chatbot />
      {/* <LocomotiveScrollProvider
        watch={[]}
        options={scrollOptions}
        containerRef={containerRef}
      > */}
        <motion.main
          exit={{ opacity: 0 }}
          key="home"
          data-scroll-container
          ref={containerRef}
          id="home"
        >
          <Header />
          <Body />
          <Footer />
        </motion.main>
      {/* </LocomotiveScrollProvider> */}
    </Fragment>
  );
};

export default Home;
