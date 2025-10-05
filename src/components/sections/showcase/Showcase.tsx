import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Showcase = () => {

    const sectionRef = useRef(null); 
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: 'power2.inOut', 
                    delay: (index+1) * 0.3, 
                    scrollTrigger: {
                        trigger: project, 
                        start: 'top bottom-=100'
                    }
                }
            )
        });

        gsap.fromTo(sectionRef.current, 
        {opacity: 0}, 
        {opacity: 1, duration: 1.5, ease: 'power2.inOut'})

    },[]);


  return (
    <div id="work" className="app-showcase"ref={sectionRef}>
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className="text-content">
                        <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                        <p className="text-white-50 md:text-xl">
                            An app built with React Native, Redux, Node.js, Express, and MongoDB that connects riders with drivers for convenient transportation.
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="Library Management" />
                        </div>
                        <h2>Library Management Platform</h2>
                    </div>

                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ff7edb]">
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2>YC Directory - A Startup Showcase App</h2>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase;