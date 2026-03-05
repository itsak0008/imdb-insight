import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SentimentCard = ({ sentiment }) => {
  const color =
    sentiment.classification === "Positive"
      ? "bg-green-500"
      : sentiment.classification === "Mixed"
        ? "bg-yellow-500"
        : "bg-red-500";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mt-6 shadow-xl"
    >
      <h3 className="text-xl font-semibold mb-3">AI Audience Sentiment</h3>
      <p className="text-gray-300 mb-4">{sentiment.summary}</p>
      <span className={`px-4 py-2 rounded-full text-white ${color}`}>
        {sentiment.classification}
      </span>
    </motion.div>
  );
};

export default SentimentCard;
