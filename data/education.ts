/**
 * education.ts
 *
 * The Education section, most recent first.
 *
 * `result` and `coursework` are optional — the school entries below leave
 * `coursework` out entirely and the site simply doesn't render it.
 *
 * When you finish DBMS, Operating Systems, Computer Networks or OOP, add
 * them to the coursework array. Those four are among the most commonly
 * screened keywords in software engineering hiring.
 */

import type { Education } from "./types";

export const education: Education[] = [
  {
    institution: "Kalyani Government Engineering College",
    qualification: "B.Tech in Computer Science and Engineering",
    location: "Nadia, West Bengal",
    period: "2024 - 2028",
    result: "CGPA: 7.01/10 (through 4th semester)",
    coursework: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Computer Organization & Architecture",
      "Discrete Mathematics",
    ],
  },

  {
    institution: "Amarkanan Deshbandhu Vidyalaya",
    qualification: "Higher Secondary (WBCHSE), Science - PCMB",
    location: "Bankura, West Bengal",
    period: "2021 - 2023",
    result: "80%",
  },

  {
    institution: "Amarkanan Deshbandhu Vidyalaya",
    qualification: "Secondary (WBBSE)",
    location: "Bankura, West Bengal",
    period: "2016 - 2021",
    result: "80%",
  },
];
