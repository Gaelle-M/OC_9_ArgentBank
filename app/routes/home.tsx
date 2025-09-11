import {Features} from "~/components/features/Features";
import type {Route} from "./+types/home";

export function meta({} : Route.MetaArgs) {
    return [
        {
            title: "ArgentBank"
        }, {
            name: "description",
            content: "Welcome to React Router!"
        }
    ];
}

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>

            <div className="features">
                <Features
                    image="/assets/img/icon-chat.webp"
                    title="You are our #1 priority"
                    texte="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."/>
                <Features
                    image="/assets/img/icon-money.webp"
                    title="More savings means higher rates"
                    texte="The more you save with us, the higher your interest rate will be!"/>
                <Features
                    image="/assets/img/icon-security.webp"
                    title="Security you can trust"
                    texte="We use top of the line encryption to make sure your data and money
            is always safe."/>
            </div>
        </div>
    )
}
