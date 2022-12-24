import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import {motion} from "framer-motion";


import React from 'react'

function Home() {
    return (
        /*motion div here and in cuisine (and the rest) for animation purposes*/
        // Only fades in, not out so need to wrap [AnimatePresence] around pages
        // But since working with routes it will need location
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Veggie/>
            <Popular/>
        </motion.div>

    )
}

export default Home