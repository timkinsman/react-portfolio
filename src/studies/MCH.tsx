import {MCH} from "../colors"
import img from "../images/Clients/client-mch.svg";

import { VERSA_Agency } from "../tagging/function";
import { App } from "../tagging/output";

import { Health } from '../tagging/industries'
import { UX___Strategy } from '../tagging/capabilities'
import { 
    Artefact_Review,
    Requirements_Gathering,
    Revised_User_Flows
} from '../tagging/researchMethods'

export default {
    color: MCH, //color
    hover: "",
    img,
    redirect: "mch",
    thumbnail: "",
    title: "Maternal & Child Health",

    //tagging
    function: VERSA_Agency,
    link: "https://www.betterhealth.vic.gov.au/mchapp",
    output:  [App],

    capabilites: [UX___Strategy],
    industries: [Health],
    researchMethods: [
        Artefact_Review,
        Requirements_Gathering,
        Revised_User_Flows
    ],    

    //study
    brief: ["Design and implement a digital experience platform as part of the Council’s Customer Experience Program."],
    challenge: ["BankVic’s existing website was confusing and complex for both users and staff to use, we helped plan and deliver a future-proof platform, with endless customisation and personalisation, putting the members at the centre of the experience."],
    credits: ["Trainer photography by Jeremy Simons", "Back-end development by PixelForce"],
    deliverables: ["BankVic website re-design which can be viewed here"],
    hero: "BankVic is a 100% member owned bank focused on serving police, health, emergency and public services, as well as their family and friends. Their aim is to build healthy communities that are financially, socially and environmentally sustainable.",
    objective: [
        "To know where the root of the user’s problems originate you need to understand the user, and a credit to BankVic for supporting the need for user research. We did extensive research into the BankVic member experience, understanding how customers are interacting with the website, and uncovering opportunities where we could enhance the user experience.",
        "Using Google analytics, user and stakeholder interviews, UX reviews, tree testing, card sorting and a content audit, we began to unearth the pain points where we’d need to put the greater focus, and where we could ultimately add greater value."
    ],
    results: ["Comprehensive user research was conducted to uncover insights to formulate personas and customer journey maps. These informed our design direction for the wireframes and ensured we maintain a human-centred approach in our ideation. Iterative UX design simplified the complex navigation to streamline user flows. Modern designs injected new life into the brand, inspired by user research and refined through concept testing."],
     
    testimonials: []
}