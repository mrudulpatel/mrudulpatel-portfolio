import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export default function useSectionInView(sectionName: SectionName) {
    const { setActiveSection, timeLastClicked } = useActiveSectionContext();
    const { ref, inView } = useInView({
        threshold: 0.5
    });

    useEffect(() => {
        if (inView && Date.now() - timeLastClicked > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeLastClicked, sectionName]);

    return {
        ref,
    }
}