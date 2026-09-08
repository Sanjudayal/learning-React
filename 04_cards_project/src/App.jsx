import React from "react";
import Card from "./components/Card";

const App = () => {
  // const cast = ["Raya", "Rumi", "Nadiya", "Rebecca", "Mellisa", "Ganga"];
  const jobOpenings = [
    {
      brandlogo:
        "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571050.jpg",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Senior Software Engineer, Cloud Infrastructure",
      tag1: "Full-time",
      tag2: "Senior level",
      payPerHour: 115,
      location: "Mountain View, CA, USA",
    },
    {
      brandlogo:
        "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "AI/ML Research Intern",
      tag1: "Part-time",
      tag2: "Junior level",
      payPerHour: 65,
      location: "Cupertino, CA, USA",
    },
    {
      brandlogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9j5cZLrOXF0UfFg_AV9-7F8rjBK3Pv10HmJp0KBiKUeIz08bvm3-bVWg&s=10",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "Frontend Engineer, Product Growth",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 95,
      location: "Mumbai, India",
    },
    {
      brandlogo:
        "https://i.pinimg.com/236x/89/61/31/8961313816abd158bb3beae2edf64f63.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Cloud Support Associate",
      tag1: "Full-time",
      tag2: "Junior level",
      payPerHour: 45,
      location: "Bengaluru, India",
    },
    {
      brandlogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Engineering Manager, Streaming Platform",
      tag1: "Full-time",
      tag2: "Senior level",
      payPerHour: 160,
      location: "Los Gatos, CA, USA",
    },
    {
      brandlogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEej-B-dTbyp-oJ3GLCfQ3EYHxn9TpTooXcss2g9mJMQ&s=10",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Data Scientist, Azure AI",
      tag1: "Full-time",
      tag2: "Mid-level",
      payPerHour: 88,
      location: "Hyderabad, India",
    },
    {
      brandlogo:
        "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/nvidia-color.png",
      companyName: "NVIDIA",
      datePosted: "12 hours ago",
      post: "Deep Learning Software Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      payPerHour: 130,
      location: "Santa Clara, CA, USA",
    },
    {
      brandlogo:
        "https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png",
      companyName: "Uber",
      datePosted: "3 weeks ago",
      post: "Backend Engineering Co-op",
      tag1: "Part-time",
      tag2: "Junior level",
      payPerHour: 55,
      location: "San Francisco, CA, USA",
    },
    {
      brandlogo:
        "https://images.icon-icons.com/2699/PNG/512/salesforce_logo_icon_170764.png",
      companyName: "Salesforce",
      datePosted: "6 days ago",
      post: "Technical Support Engineer",
      tag1: "Full-time",
      tag2: "Junior level",
      payPerHour: 40,
      location: "Tokyo, Japan",
    },
    {
      brandlogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrny_nvp6LARwRDfsB4pTpmSM0hFEVGIvndRbMuBlutvyyocCiH9TZg&s=10",
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
      {jobOpenings.map(function (el, idx) {
        return (
          <div key={idx}>
            <Card
              company={el.companyName}
              post={el.post}
              logo={el.brandlogo}
              datePosted={el.datePosted}
              tag1={el.tag1}
              tag2={el.tag2}
              payPerHour={el.payPerHour}
              location={el.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
