let resume = {
  title: "Resume",
  Name: "SAI TEJA ALLA",
  Mail_id: "xyz@gmail.com",
  Ph_No: "1234567894",
  educational_qualifications: [
    {
      course_name: "btech",
      Year_of_passing: "2020",
      Grade: "9.18 GPA",
    },
    {
      course_name: "Diploma",
      Year_of_passing: "2017",
      Grade: "85.69%",
    },
    {
      course_name: "10th ",
      Year_of_passing: "2014",
      Grade: "9.3GPA",
    },
  ],
  experience: [
    {
      company: "Optive Photonics",
      Role: "Intern",
      period: "6 Months",
    },
    {
      company: "UST Global",
      Role: "Associate Software Developer",
      period: "2021-present",
    },
  ],
  Technical_skills: {
    programming_language: [
      {
        language: "Java",
        Level: "Intermediate",
      },
      {
        language: "JavaScrtipt",
        Level: "Pro",
      },
      {
        language: "python",
        Level: "Moderately Pro",
      },
    ],
    Technical_Knowledege: [
      {
        subject: "Computer Networks",
        concepts: [
          "Types of Networks",
          "Network Toplogies",
          "Routing Protocols",
          "Newtwork Hardware and Software",
        ],
      },
      {
        subject: "GCP",
        concepts: ["GCP fundamentals", "Essential Infrastuctre of GCP"],
      },
    ],
  },
  projects: [
    {
      Title: "GSM, GPS based vehicle tracking",
      Duration: " 2 months",
      Role: "  Circuit Implementor and Debugger",
      Description:
        " The main aim of this project is to track the vehicle when it is theft by someone, using GLOBAL POSITIONING SYSTEM (GPS) it is possible to track our vehicle’s current location and that current location is sent to our mobile as text message with google maps link by means of GSM MODULE which is present in the vehicle along with the GPS.",
    },
    {
      Title: "GSM Based Home Automation",
      Duration: " 1 month",
      Role: "   Team Leader",
      Description:
        " In GSM based home automation we control the home appliances like lights,fans, what not, any electrical appliance can be switched on and off remotely just by usingcommands through a GSM based mobile phone.",
    },
  ],
};

console.log(resume);
