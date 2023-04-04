import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";

function Home() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation('down')}>
            <img
              src="./tpv.png"
              alt="logo"
              className="w-9 h-9 object-contain"
            />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home;
