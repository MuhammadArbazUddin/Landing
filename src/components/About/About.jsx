import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center md:flex-row items-start min-h-screen">
      {/* Left Section */}
      <div className="w-full sm:w-[50%]  p-6 md:p-16 space-y-6 md:sticky md:top-0">
        <img
          //   src="https://baileygp.com/wp-content/uploads/B2BDigitalMarketing_HeroImage_2x.gif"
          src="https://i.pinimg.com/originals/6a/b9/02/6ab9028c3b5d70eeec277ed114f8f4c7.gif"
          alt=""
        />
      </div>

      {/* Right Section */}
      <motion.div
        className="w-full sm:w-[70%] p-6 md:p-16 md:px-[10rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="space-y-4 md:space-y-6 py-2 px-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-xl md:text-4xl mb-4 font-bold">
                The Upsilon Story
              </h1>
              <p className="text-sm md:text-sm">
                Upsilon started as a classic outsourcing company. We were a team
                of programmers focused on writing clean code and building the
                required functionality, but we didn’t see the entire picture -
                of how products are ideated, launched, and managed from the
                business perspective.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="space-y-4 md:space-y-6 py-2 px-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="text-sm md:text-sm">
              With each project delivered to our clients, we learned a lot. Our
              team grew and became more cross-functional as we started doing
              more complex projects. We expanded our service offering: from a
              software engineering company, Upsilon transformed into a
              full-service tech partner that could provide product design,
              development, management, and delivery.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="space-y-4 md:space-y-6 py-2 px-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="text-sm md:text-sm">
              The valuable experience we gained from every case brought us to
              who we are today - a product studio. Spending thousands of hours
              working on clients’ projects, we always look for ways to make our
              experience more delightful, effective, and productive. That’s how
              our products - OneBar, ToDoBot, OrgaNice - were born.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="space-y-4 md:space-y-6 py-2 px-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="text-sm md:text-sm">
              As a result, now we successfully combine two businesses that
              complement each other. As a tech partner for our clients, we treat
              their every project like it's our little startup. And we build our
              own B2B SaaS solutions continuing to cultivate the spirit of
              innovation and product-first thinking within the company.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
