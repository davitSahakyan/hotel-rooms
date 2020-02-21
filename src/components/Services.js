import React, { Component } from "react";
import Title from "./Title";
// Icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: `We are geared towards the fulfilment of the needs of any
                discerning guest and below you can find an alphabetical overview
                of the most commonly-used services and facilities offered by our
                boutique hotel.`
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: `We are geared towards the fulfilment of the needs of any
                discerning guest and below you can find an alphabetical overview
                of the most commonly-used services and facilities offered by our
                boutique hotel.`
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: `We are geared towards the fulfilment of the needs of any
                discerning guest and below you can find an alphabetical overview
                of the most commonly-used services and facilities offered by our
                boutique hotel.`
            },
            {
                icon: <FaBeer />,
                title: "stronges beer",
                info: `We are geared towards the fulfilment of the needs of any
                discerning guest and below you can find an alphabetical overview
                of the most commonly-used services and facilities offered by our
                boutique hotel.`
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Services;
