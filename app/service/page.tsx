import "./page.css";

export default function service() {
    return (
        <div id="my-container">
            <h1 id="tittle-s" className="text-[50px]">Service</h1>
            <p id="description" className="text-lg">We provide modern and reliable services to help your business grow</p>

            <div id="services" className="mt-8 flex flex-row gap-16">
                <div id="my-services" className="flex flex-col items-center text-center gap-4">
                    <img id="my-img-1" src="/html-css-collage-concept.jpg" alt="Web Development" width={250} height={250} />
                    <h2 className="text-2xl font-semibold">Web Development</h2>
                    <p className="text-[50]">We build fast, secure, and scalable websites using modern technologies.</p>
                </div>

                <div id="my-services" className="flex flex-col items-center text-center gap-4">
                    <img id="my-img-2" src="/web-design-internet-website-responsive-software-concept.jpg" alt="Web Design" width={250} height={250} />
                    <h2 className="text-2xl font-semibold">Web Design</h2>
                    <p className="text-[50]">We design modern, attractive, and user-friendly websites that work on all devices.</p>
                </div>

                <div id="my-services" className="flex flex-col items-center text-center gap-4">
                    <img id="my-img-3" src="/employee-working-marketing-setting.jpg" alt="SEO Optimization" width={250} height={250} />
                    <h2 className="text-2xl font-semibold">SEO Optimization</h2>
                    <p className="text-[50]">We optimize your website to rank higher on search engines and attract more visitors.</p>
                </div>
            </div>
        </div>
    );
}