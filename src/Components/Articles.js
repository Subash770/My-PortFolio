import React from "react";
import { motion } from "framer-motion";

function Articles({ articles }) {
  return (
    <section>
      <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        Geeks for Geeks Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
        {articles.map(({ title, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border rounded-lg shadow-md bg-white dark:bg-dark-content hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-green-600">Read Article</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Articles;
