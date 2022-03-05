import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className={clsx("col col--4")}>
                        <div className="text--center">
                            <a href="/roadmap/">
                                <img
                                    className={styles.featureImagePFP}
                                    alt="10000 PFPs"
                                    src="/img/sd-pfp.png"
                                />
                            </a>
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>10000 SD Tokens</h3>
                            <p>
                                COMING SOON: I've been learning about NFTs and
                                plan to release a CivApps token. It isn't an NFT
                                scam. I want to generate a bunch of tokens
                                because I think they will be beautiful in an
                                interesting kind of way.
                            </p>
                        </div>
                    </div>
                    <div className={clsx("col col--4")}>
                        <div className="text--center">
                            <a href="/stories/dancing-robot/">
                                <img
                                    className={styles.featureImage}
                                    alt="CivApps and the Dancing Robot"
                                    src="/img/sd-dancing-robot.png"
                                />
                            </a>
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>#1 CivApps and the Dancing Robot</h3>
                            <p>
                                CivApps is on the run. He has a new toy - a
                                wonderful dancing robot. But is everything as it
                                seems? His friend seems to know something
                                CivApps doesn't...
                            </p>
                        </div>
                    </div>
                    <div className={clsx("col col--4")}>
                        <div className="text--center">
                            <a href="/stories/static/">
                                <img
                                    className={styles.featureImage}
                                    alt="Static"
                                    src="/img/sd-static.png"
                                />
                            </a>
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>#2 Static</h3>
                            <p>
                                This is a story from before CivApps and
                                Oysterboy met. Oysterboy comes home one day to
                                find a strange dog in the hallway and a very
                                nasty surprise in his apartment. An univited
                                visitor has left a mess.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
