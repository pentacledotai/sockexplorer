import React from "react";
import Layout from "../components/layout";
import FeaturesSmlLayout from "../components/feature-small/features-small";
import Header from "../components/header";
import FeatureMainLayout from "../components/feature-med/feature-main";
import FeaturesXsmlLayout from "../components/feature-small/features-xmall";
import SockExplorer from "./socks/sock-explorer";

export const Main = () => {
    return (
        <>
            <Header/>
            <SockExplorer/>
        </>
    )
}