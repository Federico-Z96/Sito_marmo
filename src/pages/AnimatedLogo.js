import { motion } from "framer-motion";

const AnimatedLogo = () => {
    // Varianti per l'animazione dei path
    const pathVariants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: (i) => ({
            opacity: 1,
            pathLength: 1,
            transition: {
                delay: i * 0.3, // Ritardo sequenziale per ogni pezzo
                duration: 1.2,  // Durata dell'animazione
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="flex items-center p-6 lg:p-24 justify-center bg-black h-[70vh] lg:h-[100vh]">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 928 612"
                // width="928"
                // height="612"
                className="w-full lg:w-[928px] h-auto mx-auto"
                initial="hidden"
                animate="visible"
            >
                <title>maniscale marmi</title>
                <style>
                    {`.s0 { fill: none; stroke: #f7f6f3; stroke-width: 2; }
                  .s1 { fill: none; stroke: #ffffff; stroke-width: 2; }`}
                </style>

                <motion.g id="Livello 1" className="s0">
                    <motion.g id="<Group>">
                        <motion.path
                            d="m273.9 577.5h-48.7l-12.6 27.6h-18.5l56.2-120.8 54.3 120.8h-18.8zm-7-16.1l-16.8-38.7-17.7 38.7z"
                            variants={pathVariants}
                            custom={5}
                        />
                        <motion.path
                            d="m318.8 605.1v-121.4l82.8 86.7v-79h17.2v120.6l-82.9-86.5v79.6z"
                            variants={pathVariants}
                            custom={6}
                        />
                        <motion.path
                            d="m463.2 491.4v113.7h-17.2v-113.7z"
                            variants={pathVariants}
                            custom={7}
                        />
                        <motion.path
                            d="m554.7 508.4l-13.9 8.2q-3.9-6.8-7.4-8.8-3.7-2.4-9.5-2.4-7.2 0-11.9 4.1-4.7 3.9-4.7 10 0 8.3 12.4 13.4l11.3 4.6q13.9 5.6 20.3 13.7 6.4 8 6.4 19.7 0 15.7-10.5 25.9-10.5 10.3-26.1 10.3-14.8 0-24.5-8.7-9.4-8.8-11.8-24.7l17.4-3.8q1.1 10 4.1 13.8 5.3 7.4 15.4 7.4 8.1 0 13.4-5.4 5.3-5.4 5.3-13.6 0-3.3-1-6.1-0.9-2.7-2.8-5.1-2-2.3-5.1-4.3-3.1-2-7.3-3.9l-11-4.5q-23.3-9.9-23.3-28.9 0-12.8 9.8-21.4 9.8-8.7 24.3-8.7 19.7 0 30.7 19.2z"
                            variants={pathVariants}
                            custom={8}
                        />
                        <motion.path
                            d="m662.3 497.5v20.4q-14.8-12.5-30.7-12.5-17.6 0-29.6 12.6-12 12.5-12 30.6 0 17.9 12 30.2 12.1 12.3 29.6 12.3 9.1 0 15.4-3 3.5-1.4 7.3-3.9 3.8-2.5 8-6.1v20.7q-14.7 8.3-30.9 8.3-24.4 0-41.6-17-17.1-17.1-17.1-41.3 0-21.7 14.3-38.7 17.7-20.9 45.7-20.9 15.3 0 29.6 8.3z"
                            variants={pathVariants}
                            custom={9}
                        />
                        <motion.path
                            d="m753.4 577.5h-48.6l-12.7 27.6h-18.5l56.3-120.8 54.2 120.8h-18.7zm-7-16.1l-16.9-38.7-17.7 38.7z"
                            variants={pathVariants}
                            custom={10}
                        />
                        <motion.path
                            d="m815.5 491.4v97.6h33.4v16.1h-50.6v-113.7z"
                            variants={pathVariants}
                            custom={11}
                        />
                        <motion.path
                            d="m927.9 507.6h-45.6v27.3h44.2v16.1h-44.2v38h45.6v16.1h-62.8v-113.7h62.8z"
                            variants={pathVariants}
                            custom={12}
                        />
                    </motion.g>
                    <motion.path
                        d="m831.2 293.4h-153.2l-40 87h-58.1l177.1-380.4 170.9 380.4h-59.1zm-22.1-50.8l-53-121.7-55.7 121.7z"
                        fillRule="evenodd"
                        variants={pathVariants}
                        custom={2}
                    />
                </motion.g>
                <motion.g id="Livello 2" className="s0">
                    <motion.path
                        d="m176.7 121l113.3 259.4h58.2l-170.6-380.4-177.1 380.4h58.2z"
                        variants={pathVariants}
                        custom={0}
                    />
                    <motion.path
                        d="m466.2 121l113.7 259.4h58.1l-170.9-380.4-177.1 380.4h58.2z"
                        variants={pathVariants}
                        custom={1}
                    />
                    <motion.path
                        d="m65 522l36.1 83.1h18.9l-54.7-121.9-56.8 121.9h18.7z"
                        variants={pathVariants}
                        custom={3}
                    />
                    <motion.path
                        d="m157.7 522l36.1 83.1h19l-54.8-121.9-56.7 121.9h18.6z"
                        className="s1"
                        variants={pathVariants}
                        custom={4}
                    />
                </motion.g>
            </motion.svg>
        </div>
    );
};

export default AnimatedLogo;
