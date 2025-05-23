import React from 'react'
import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Digital Marketing & Online Advertising"} description={"Helping businesses get noticed online through social media, websites, email marketing, and online adverts that increase sales, brand awareness, and online visibility."} />
                        <Card id={2} icon={<RiQuillPenLine size={60} />} title={"Brand Building & Public Relations"} description={"Creating strong brand identities and managing your public image through strategic messaging, media relations, influencer partnerships, and social media storytelling."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Performance Marketing & Campaign Management"} description={"Running focused marketing campaigns — like social media adverts, Google Ads, and email promotions — designed to deliver measurable results such as increased sales, website visits, followers, or inquiries. I track and adjust campaigns to maximize performance and return on investment."} />
                        <Card id={4} icon={<RiPantoneFill size={60} />} title={"Customer Insights & Market Research"} description={"Gathering market data about your customers, competitors, and industry trends, and turning it into practical advice to help grow your business."} />
                        <Card id={5} icon={<RiPantoneFill size={60} />} title={"Graphic Design & Creative Content"} description={"Offering professional branding, social media creatives, flyers, adverts, and business cards through my experienced design team, ensuring your brand looks polished and stands out."} />
                        <Card id={6} icon={<RiPantoneFill size={60} />} title={"Website Design & Development"} description={"Together with my expert collaborators, we build modern, mobile-friendly, SEO-optimised websites that represent your brand professionally and convert visitors into loyal customers."} />
                        <Card id={6} icon={<RiPantoneFill size={60} />} title={"Market Intelligence Reports & Business Analytics"} description={"Turning complex market and performance data into clear, actionable reports and dashboards to guide your marketing, communication, and sales strategies."} />
                        <Card id={6} icon={<RiPantoneFill size={60} />} title={"AI Tools & Data-Driven Marketing Solutions"} description={"Introducing simple, affordable AI tools and data analysis solutions to help businesses track marketing performance and make smarter decisions."} />
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p> 
                </div>
            </SlideUp>
        </div>
    )
}