import CountUp from "react-countup";
import "./AnimatedCounter.css";
import type { HomepageContent } from "../../../contents/_base/homepage";
import { useContent } from "../../../hooks/useContent";

export const AnimatedCounter = () => {

    const { animatedCounter } = useContent<HomepageContent>();

    return (
        <section id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {
                    animatedCounter?.counterItems.map((item) => (
                        <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                            <div className="counter-number text-white text-5xl font-bold mb-2">
                                <CountUp suffix={item.suffix} end={item.value} />
                            </div>
                            <div className="text-white-50 text-lg" >{item.label}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default AnimatedCounter;