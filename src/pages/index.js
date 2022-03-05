import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header
            className={clsx(
                "hero hero--primary",
                styles.heroBanner,
                "heroBanner-background"
            )}
        >
            <div className="container">
                <h1 className="hero__title heroBanner-container-h1">CivApps</h1>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Web3 comic, art-thing, DAO and whatever you want it to be."
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
