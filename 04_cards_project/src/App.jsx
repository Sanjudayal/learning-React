import React from "react";
import Card from "./components/Card";

const App = () => {
  // const cast = ["Raya", "Rumi", "Nadiya", "Rebecca", "Mellisa", "Ganga"];
  const jobOpenings = [
    {
      brandlogo: "https://clearbit.com",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Senior Software Engineer, Cloud Infrastructure",
      tag1: "Full-time",
      tag2: "Senior level",
      payPerHour: 115,
      location: "Mountain View, CA, USA",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "AI/ML Research Intern",
      tag1: "Part-time",
      tag2: "Junior level",
      payPerHour: 65,
      location: "Cupertino, CA, USA",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "Frontend Engineer, Product Growth",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 95,
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Cloud Support Associate",
      tag1: "Full-time",
      tag2: "Junior level",
      payPerHour: 45,
      location: "Bengaluru, India",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Engineering Manager, Streaming Platform",
      tag1: "Full-time",
      tag2: "Senior level",
      payPerHour: 160,
      location: "Los Gatos, CA, USA",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Data Scientist, Azure AI",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 88,
      location: "Hyderabad, India",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "NVIDIA",
      datePosted: "12 hours ago",
      post: "Deep Learning Software Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      payPerHour: 130,
      location: "Santa Clara, CA, USA",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "Uber",
      datePosted: "3 weeks ago",
      post: "Backend Engineering Co-op",
      tag1: "Part-time",
      tag2: "Junior level",
      payPerHour: 55,
      location: "San Francisco, CA, USA",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "Salesforce",
      datePosted: "6 days ago",
      post: "Technical Support Engineer",
      tag1: "Full-time",
      tag2: "Junior level",
      payPerHour: 40,
      location: "Tokyo, Japan",
    },
    {
      brandlogo: "https://clearbit.com",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "Principal UI/UX Designer",
      tag1: "Full-time",
      tag2: "Senior level",
      payPerHour: 125,
      location: "London, UK",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (el) {
        return <Card  />
      })}
    </div>
  );
};

export default App;
